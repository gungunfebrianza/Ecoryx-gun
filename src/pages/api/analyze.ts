import { HumanMessage, SystemMessage } from '@langchain/core/messages';
import { ChatOpenAI, OpenAIEmbeddings } from '@langchain/openai';
import formidable from 'formidable';
import { readFileSync, unlinkSync } from 'fs';
import type { NextApiRequest, NextApiResponse } from 'next';
import ty from 'typy';
import { getDocumentProxy } from 'unpdf';

export const config = {
  api: {
    bodyParser: false,
  },
};

const getOpenAIApiKey = () => {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    throw new Error('OPENAI_API_KEY is not set in environment variables. Please add OPENAI_API_KEY to your .env.local file.');
  }

  return apiKey;
};

const createChatModel = () => {
  const apiKey = getOpenAIApiKey();

  return new ChatOpenAI({
    modelName: 'gpt-5.1',
    // temperature: 0.2,
    openAIApiKey: apiKey,
    streaming: true,
  });
};

const createEmbeddings = () => {
  const apiKey = getOpenAIApiKey();

  return new OpenAIEmbeddings({
    openAIApiKey: apiKey,
  });
};

async function handler(req: NextApiRequest, res: NextApiResponse<SummarizeResponse>) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.setHeader('Cache-Control', 'no-cache, no-transform');
  res.setHeader('Connection', 'keep-alive');
  res.setHeader('X-Accel-Buffering', 'no');

  res.status(200);

  type StreamResponse = {
    type: 'status' | 'error' | 'message';
    message?: string;
    data?: any;
  };

  const writeStream = (data: StreamResponse) => {
    const message = JSON.stringify(data) + '\n';
    res.write(message);
    if (typeof (res as any).flush === 'function') {
      (res as any).flush();
    }
  };

  let tempFilePath: string | null = null;

  try {
    const form = formidable({ multiples: false });
    const [body, files] = await form.parse(req);

    // dataset
    const availableDatasets = ['sasb-oil-and-gas'];
    const labeledDatasets = {
      'sasb-oil-and-gas': { standard: 'SASB', name: 'SASB Oil & Gas Extraction' },
    };
    if (!body.templateId || !availableDatasets.includes(body.templateId[0] as string)) {
      writeStream({
        type: 'error',
        message: `You  need select a valid templateId: ${Object.values(labeledDatasets)
          .map((d) => d.name)
          .join(', ')}`,
      });
      return res.end();
    }

    const templateId = body.templateId[0];

    const selectedStandard = ty(labeledDatasets, templateId as string).safeObject.standard;

    // since only one dataset for now, we directly import it
    const selectedData = (await import('@/data/sasb-oil-and-gas.json')).default;

    // file
    if (!files.file || !files.file[0]) {
      writeStream({ type: 'error', message: 'No file provided' });
      return res.end();
    }

    const uploadedFile = files.file[0];

    if (uploadedFile.size > 3 * 1024 * 1024) {
      writeStream({ type: 'error', message: 'File size exceeds 3MB limit' });
      return res.end();
    }

    tempFilePath = uploadedFile.filepath;

    writeStream({
      type: 'status',
      message: 'Reading content of PDF...',
    });

    const pages = await extractPagesFromFile(tempFilePath, uploadedFile.mimetype || '');

    writeStream({
      type: 'status',
      message: `Successfully extracted ${pages.length} pages from document.`,
    });

    if (pages.length === 0) {
      writeStream({
        type: 'error',
        message: 'File is empty or could not be read',
      });
      return res.end();
    }

    writeStream({
      type: 'status',
      message: `Analyzing document structure...`,
    });

    const llm = createChatModel();
    const embeddings = createEmbeddings();

    writeStream({
      type: 'status',
      message: `Processing ${selectedStandard} metrics...`,
    });

    // Pre-compute embeddings for each page (RAG setup)
    writeStream({
      type: 'status',
      message: 'Preparing semantic index of document pages...',
    });

    const MIN_PAGE_TEXT_LENGTH = 50;
    const MAX_EMBED_CHARS = 6000;

    const filteredPages = pages
      .map((page) => ({
        ...page,
        text: (page.text || '').replace(/\s+/g, ' ').trim(),
      }))
      .filter((page) => page.text.length >= MIN_PAGE_TEXT_LENGTH);

    if (filteredPages.length === 0) {
      writeStream({
        type: 'error',
        message: 'No readable content found in the document after filtering.',
      });
      return res.end();
    }

    const pageTexts = filteredPages.map((page) => page.text.slice(0, MAX_EMBED_CHARS));
    const pageEmbeddings = await embeddings.embedDocuments(pageTexts);

    const pageEmbeddingNorms = pageEmbeddings.map((embedding) => Math.sqrt(embedding.reduce((sum, v) => sum + v * v, 0)));

    const pageKeywordSets = filteredPages.map((page) => {
      const tokens = page.text
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, ' ')
        .split(/\s+/)
        .filter((t) => t.length > 2);
      return new Set(tokens);
    });

    const cosineSimilarity = (a: number[], b: number[], normA: number, normB: number) => {
      const dot = a.reduce((sum, v, i) => sum + v * b[i], 0);
      return dot / (normA * normB || 1);
    };

    const buildKeywordSet = (text: string) => {
      const tokens = text
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, ' ')
        .split(/\s+/)
        .filter((t) => t.length > 2);
      return new Set(tokens);
    };

    const calculateKeywordOverlap = (keywordSet: Set<string>, pageSet: Set<string>) => {
      if (keywordSet.size === 0) return 0;
      let overlap = 0;
      keywordSet.forEach((token) => {
        if (pageSet.has(token)) overlap += 1;
      });
      return overlap / keywordSet.size;
    };

    const selectWithMMR = (candidates: { index: number; score: number }[], topK: number, lambda = 0.7) => {
      const selected: { index: number; score: number }[] = [];
      const used = new Set<number>();

      while (selected.length < topK && candidates.length > 0) {
        let bestCandidate: { index: number; score: number } | null = null;
        let bestScore = -Infinity;

        for (const candidate of candidates) {
          if (used.has(candidate.index)) continue;
          let diversityPenalty = 0;

          for (const sel of selected) {
            const sim = cosineSimilarity(
              pageEmbeddings[candidate.index],
              pageEmbeddings[sel.index],
              pageEmbeddingNorms[candidate.index],
              pageEmbeddingNorms[sel.index],
            );
            diversityPenalty = Math.max(diversityPenalty, sim);
          }

          const mmrScore = lambda * candidate.score - (1 - lambda) * diversityPenalty;
          if (mmrScore > bestScore) {
            bestScore = mmrScore;
            bestCandidate = candidate;
          }
        }

        if (!bestCandidate) break;
        selected.push(bestCandidate);
        used.add(bestCandidate.index);
      }

      return selected;
    };

    const results = [];

    for (let i = 0; i < selectedData.length; i++) {
      const metric = selectedData[i];

      writeStream({
        type: 'status',
        message: `Processing metric ${i + 1}/${selectedData.length}: ${metric.code}`,
      });

      // Build a semantic query for this metric
      const metricQuery = `${metric.code} - ${metric.metric} - ${metric.topic} - ${metric.category} - unit ${metric.unit}`;
      const metricKeywordSet = buildKeywordSet(metricQuery);
      const queryEmbedding = await embeddings.embedQuery(metricQuery);
      const queryNorm = Math.sqrt(queryEmbedding.reduce((sum, v) => sum + v * v, 0));

      // Score each page by similarity to the metric query
      const scoredPages = pageEmbeddings.map((embedding, index) => {
        const semanticScore = cosineSimilarity(embedding, queryEmbedding, pageEmbeddingNorms[index], queryNorm);
        const lexicalScore = calculateKeywordOverlap(metricKeywordSet, pageKeywordSets[index]);
        const combinedScore = semanticScore * 0.7 + lexicalScore * 0.3;
        return {
          index,
          score: combinedScore,
        };
      });

      scoredPages.sort((a, b) => b.score - a.score);

      const TOP_K_PAGES = 5;
      const CANDIDATE_POOL = 20;
      const mmrSelected = selectWithMMR(scoredPages.slice(0, CANDIDATE_POOL), TOP_K_PAGES);
      const relevantPages = mmrSelected.map(({ index }) => filteredPages[index]);

      const contextText = relevantPages
        .map((page: { num: number; text: string }) => `[Page ${page.num}]\n${page.text}`)
        .join('\n\n');

      const SYSTEM_PROMPT = `ESG analyst converting ESG Report to selected standard format.

KEY RULES:
- Extract data from source, convert units to match ${selectedStandard} requirements
- For percentages from absolutes: (Value/Total)×100, show calculation
- Common conversions: metric tonne=1.10231 short tons, m³=264.172 gal, GJ=0.277778 MWh
- Cite page numbers for all data
- If no data: "**[Data not available]** - [reason]"
- Use professional tone, precise numbers, flag assumptions`;

      const METRIC_PROMPT = `${selectedStandard} Metric: ${metric.code} - ${metric.metric}
Topic: ${metric.topic} | Category: ${metric.category}
**REQUIRED UNIT: ${metric.unit}**

SOURCE CONTEXT:
${contextText.substring(0, 8000)}...

TASK:
Extract data and write AS the ESG report section (not a review of another report).

CRITICAL - TONE & STYLE:
- Write declarative statements as if this IS the official ESG disclosure
- DO NOT say: "Upon reviewing...", "The report shows...", "According to the document..."
- DO say: "Water withdrawal totaled...", "Emissions for the period...", "No incidents occurred..."
- If data unavailable: "**[Data not available/Not available]** - Metric not tracked during reporting period" (be direct, don't reference source documents)

OUTPUT (1-5 paragraphs):
- # Title (markdown heading)
- Direct statements with data in ${metric.unit}
- Don't cite page refs  
- Professional, authoritative ESG reporting voice
- Show conversions inline: "45,000 m³ (11.9M gal)"`;

      const metricMessages = [new SystemMessage(SYSTEM_PROMPT), new HumanMessage(METRIC_PROMPT)];

      let metricResponse = '';

      const metricStream = await llm.stream(metricMessages);
      for await (const chunk of metricStream) {
        const chunkText =
          typeof chunk.content === 'string'
            ? chunk.content
            : Array.isArray(chunk.content)
              ? chunk.content.map((part: any) => part?.text ?? '').join('')
              : '';

        if (chunkText) {
          metricResponse += chunkText;
          writeStream({
            type: 'message',
            message: JSON.stringify({
              type: 'metric_chunk',
              data: {
                id: metric.id,
                code: metric.code,
                topic: metric.topic,
                chunk: chunkText,
              },
            }),
          });
        }
      }

      results.push({
        id: metric.id,
        code: metric.code,
        metric: metric.metric,
        topic: metric.topic,
        category: metric.category,
        unit: metric.unit,
        response: metricResponse,
        context: contextText.substring(0, 500) + '...',
      });

      writeStream({
        type: 'message',
        message: JSON.stringify({
          type: 'metric_result',
          data: results[results.length - 1],
        }),
      });
    }

    writeStream({
      type: 'message',
      message: JSON.stringify({
        type: 'metric_results',
        data: results,
      }),
    });

    writeStream({
      type: 'status',
      message: `Conversion complete. Generated ${results.length} metric responses.`,
    });

    res.end();
  } catch (error) {
    console.error('Error summarizing document:', error);
    writeStream({
      type: 'error',
      message: error instanceof Error ? error.message : 'An error occurred while processing the document',
    });
    res.end();
  } finally {
    if (tempFilePath) {
      try {
        unlinkSync(tempFilePath);
      } catch (err) {
        console.error('Error deleting temporary file:', err);
      }
    }
  }
}

interface SummarizeResponse {
  success: boolean;
  summary?: string;
  pages?: { num: number; text: string; review: string }[];
  error?: string;
  isValidReport?: boolean;
}

const extractPagesFromFile = async (filePath: string, mimeType: string): Promise<{ num: number; text: string }[]> => {
  if (mimeType === 'application/pdf') {
    const dataBuffer = readFileSync(filePath);
    const uint8Array = new Uint8Array(dataBuffer);

    const pdf = await getDocumentProxy(uint8Array);
    const pages: { num: number; text: string }[] = [];

    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const textContent = await page.getTextContent();
      const text = textContent.items.map((item: any) => item.str || '').join(' ');

      pages.push({ num: i, text });
    }

    return pages;
  } else throw new Error('Unsupported file type');
};

export default handler;
