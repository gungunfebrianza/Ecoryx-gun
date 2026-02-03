import ProtectedLayout from '@/components/layout/layout';
import { httpPost } from '@/helpers/axios';
import { AnalysisStore } from '@/stores/analysisStore';
import cn from 'classnames';
import { useStoreState } from 'pullstate';
import { ChangeEvent, useEffect, useState } from 'react';
import { BiSolidFilePdf } from 'react-icons/bi';
import { FaRegStopCircle } from 'react-icons/fa';
import { IoChevronDown, IoChevronUp } from 'react-icons/io5';
import { MdErrorOutline } from 'react-icons/md';
import { RiSparklingFill } from 'react-icons/ri';
import ReactMarkdown from 'react-markdown';
import ty from 'typy';

export default function Home() {
  const [file, setFile] = useState<File | null>(null);
  const [formFile, setFormFile] = useState<ChangeEvent<HTMLInputElement> | null>(null);
  const [abortController, setAbortController] = useState<AbortController | null>(null);
  const [isAtBottom, setIsAtBottom] = useState(true);

  const [availableTemplate, setAvailableTemplate] = useState<any[]>([
    {
      id: 'sasb-oil-and-gas',
      name: 'SASB Extractive & Minerals Processing - Oil & Gas - Exploration',
    },
  ]);

  const [availableTemplateSelected, setAvailableTemplateSelected] = useState<string>('');
  const loading = useStoreState(AnalysisStore, (s) => s.loading);
  const error = useStoreState(AnalysisStore, (s) => s.error);
  const statusMessage = useStoreState(AnalysisStore, (s) => s.statusMessage);
  const metricResults = useStoreState(AnalysisStore, (s) => s.metricResults);

  useEffect(() => {
    performClear();
  }, [file]);

  // Detect if user is at bottom of scroll container
  useEffect(() => {
    const handleScroll = () => {
      const scrollContainer = document.getElementById('main-scroll-container');
      const element = scrollContainer || window.document.documentElement;
      const scrollTop = scrollContainer ? scrollContainer.scrollTop : window.scrollY;
      const scrollHeight = scrollContainer ? scrollContainer.scrollHeight : element.scrollHeight;
      const clientHeight = scrollContainer ? scrollContainer.clientHeight : window.innerHeight;

      // Consider "at bottom" if within 100px of the bottom
      const threshold = 100;
      const atBottom = scrollHeight - scrollTop - clientHeight < threshold;
      setIsAtBottom(atBottom);
    };

    const scrollContainer = document.getElementById('main-scroll-container');
    const scrollElement = scrollContainer || window;

    scrollElement.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => {
      scrollElement.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Auto-scroll to bottom when new content is streaming (only if user is at bottom)
  useEffect(() => {
    if (loading && metricResults.length > 0 && isAtBottom) {
      scrollToBottom();
    }
  }, [metricResults, loading, isAtBottom]);

  const scrollToTop = () => {
    if (typeof window === 'undefined') return;
    const scrollContainer = document.getElementById('main-scroll-container');
    if (scrollContainer) {
      scrollContainer.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollToBottom = () => {
    if (typeof window === 'undefined') return;
    const scrollContainer = document.getElementById('main-scroll-container');
    if (scrollContainer) {
      scrollContainer.scrollTo({ top: scrollContainer.scrollHeight, behavior: 'smooth' });
    } else {
      const scrollHeight = window.document?.documentElement?.scrollHeight ?? 0;
      window.scrollTo({ top: scrollHeight, behavior: 'smooth' });
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormFile(e);
      setFile(e.target.files[0]);
      AnalysisStore.update((s) => {
        s.error = null;
      });
    }
  };

  const handleStop = () => {
    if (abortController) {
      abortController.abort();
      AnalysisStore.update((s) => {
        s.loading = false;
        s.statusMessage = 'Analysis stopped by user';
      });
      setAbortController(null);
    }
  };

  const handleSubmit = async () => {
    if (!file) {
      AnalysisStore.update((s) => {
        s.error = 'Please select a file';
      });
      return;
    }

    AnalysisStore.update((s) => {
      s.loading = true;
      s.error = null;
      s.metricResults = [];
      s.statusMessage = '';
    });

    const controller = new AbortController();
    setAbortController(controller);

    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('templateId', availableTemplateSelected);

      const response = await httpPost('/api/analyze', formData, true, {
        signal: controller.signal,
        responseType: 'stream',
        adapter: 'fetch',
        validateStatus: () => true,
      });

      if (response.status < 200 || response.status >= 300) {
        AnalysisStore.update((s) => {
          s.error = 'Failed to summarize document';
        });
        return;
      }

      const reader = response.data?.getReader();
      const decoder = new TextDecoder();

      if (!reader) {
        AnalysisStore.update((s) => {
          s.error = 'Failed to read response stream';
        });
        return;
      }

      let buffer = '';

      while (true) {
        if (controller.signal.aborted) {
          reader.cancel();
          break;
        }

        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });

        const lines = buffer.split('\n');
        buffer = lines.pop() || '';

        for (const line of lines) {
          if (line.trim()) {
            try {
              const data = JSON.parse(line);

              switch (data.type) {
                case 'error':
                  AnalysisStore.update((s) => {
                    s.error = data.message;
                  });
                  break;
                case 'status':
                  AnalysisStore.update((s) => {
                    s.statusMessage = data.message;
                  });
                  break;
                case 'message':
                  try {
                    const parsedData = JSON.parse(data.message);
                    if (parsedData.type === 'metric_chunk') {
                      AnalysisStore.update((s) => {
                        const index = s.metricResults.findIndex(
                          (item) => item.id === parsedData.data.id || item.code === parsedData.data.code,
                        );
                        if (index === -1) {
                          s.metricResults.push({
                            id: parsedData.data.id,
                            code: parsedData.data.code,
                            topic: parsedData.data.topic,
                            response: parsedData.data.chunk,
                          });
                          return;
                        }

                        const existing = s.metricResults[index];
                        s.metricResults[index] = {
                          ...existing,
                          response: `${existing.response || ''}${parsedData.data.chunk}`,
                        };
                      });
                    } else if (parsedData.type === 'metric_result') {
                      AnalysisStore.update((s) => {
                        const index = s.metricResults.findIndex(
                          (item) => item.id === parsedData.data.id || item.code === parsedData.data.code,
                        );
                        if (index === -1) {
                          s.metricResults.push(parsedData.data);
                          return;
                        }

                        s.metricResults[index] = {
                          ...s.metricResults[index],
                          ...parsedData.data,
                        };
                      });
                    } else if (parsedData.type === 'metric_results') {
                      AnalysisStore.update((s) => {
                        s.metricResults = parsedData.data;
                      });
                    }
                  } catch {
                    // Regular status message
                  }
                  break;
              }
            } catch (err) {
              console.error('Error parsing stream data:', err, line);
            }
          }
        }
      }
    } catch (err) {
      const axiosIsAbort = ty(err, 'code').safeString === 'ERR_CANCELED' || ty(err, 'name').safeString === 'CanceledError';
      const isAbort = ty(err, 'name').safeString === 'AbortError' || axiosIsAbort;
      if (isAbort) {
      } else {
        AnalysisStore.update((s) => {
          s.error = err instanceof Error ? err.message : 'An error occurred';
        });
      }
    } finally {
      AnalysisStore.update((s) => {
        s.loading = false;
      });
      setAbortController(null);
    }
  };

  const performClear = () => {
    setAvailableTemplateSelected('');
    AnalysisStore.update((s) => {
      s.loading = false;
      s.error = null;
      s.statusMessage = '';
      s.metricResults = [];
    });
  };

  return (
    <ProtectedLayout menuId="esg_report_converter">
      <div className="container mx-auto p-4 lg:p-6">
        <h1 className="text-2xl font-bold mb-4 lg:mb-6">Sustainability Report Converter</h1>
        <div className="flex max-lg:flex-col gap-4">
          <div className="max-w-md w-full shrink-0 relative">
            <div className="card bg-white shadow-xl rounded-xl w-full sticky top-20 lg:min-h-80">
              <div className="card-body gap-0">
                <div className="mb-4 text-gray-600">
                  You can add your GRI report as a reference document to help the AI understand the structure and content of your
                  sustainability report.
                </div>
                <label className="form-label">Select a reference document (PDF)</label>
                <div className="mb-6 w-full">
                  <input
                    type="file"
                    value={formFile?.target.value || ''}
                    className="file-input file-input-bordered w-full"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    disabled={loading}
                  />
                </div>
                <div className="form-label">Choose Templates to generate</div>
                <select
                  className="select select-bordered w-full"
                  value={availableTemplateSelected}
                  onChange={(e) => setAvailableTemplateSelected(e.target.value)}
                  disabled={loading}
                >
                  <option value="" disabled>
                    Select a template...
                  </option>
                  {availableTemplate.map((template) => (
                    <option key={template.id} value={template.id}>
                      {template.name}
                    </option>
                  ))}
                </select>

                <div className="space-y-4 w-full pt-6">
                  <button
                    onClick={() => (loading ? handleStop() : handleSubmit())}
                    className={cn('btn w-full', {
                      'btn-error': loading,
                      'btn-primary': !loading,
                    })}
                    disabled={!file || !availableTemplateSelected}
                  >
                    {loading ? (
                      <>
                        <FaRegStopCircle className="w-4 h-4" />
                        Stop
                      </>
                    ) : (
                      <>
                        <RiSparklingFill className="w-4 h-4" /> Submit
                      </>
                    )}
                  </button>

                  {error && (
                    <div className="">
                      <div className="badge badge-error justify-start alert-sm min-h-[unset] h-auto p-2 w-full">
                        <MdErrorOutline className="w-4.5 h-4.5 shrink-0" />
                        <span>{error}</span>
                      </div>
                    </div>
                  )}
                  {statusMessage && (
                    <div className="flex items-center gap-2">
                      {loading && <span className="loading loading-spinner loading-sm"></span>}
                      <span className="text-sm text-gray-600 leading-tight">{statusMessage}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl rounded-xl grow">
            <div className="card-body">
              {metricResults.length > 0 && (
                <div className="">
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold">ESG Report</h2>
                    <p className="text-sm text-gray-500">Generated from the uploaded GRI report.</p>
                  </div>
                  <div className="">
                    {metricResults.map((result) => (
                      <section key={result.id} className="py-6">
                        <div className="1">
                          <p className="text-xs text-gray-500 mb-2">
                            {result.code}
                            {result.topic ? ` - ${result.topic}` : ''}
                          </p>
                          <ReactMarkdown className="prose prose-sm max-w-none prose-h1:mb-2 prose-h1:text-2xl prose-p:mt-0">
                            {result.response}
                          </ReactMarkdown>
                        </div>
                      </section>
                    ))}
                  </div>
                </div>
              )}
              {metricResults.length === 0 && !loading && (
                <div className="flex items-center justify-center py-8 h-full">
                  <div className="text-center text-gray-500 max-w-xs">
                    <BiSolidFilePdf className="w-16 h-16 mx-auto mb-2" />
                    Upload a GRI report and select a template to see conversion results here.
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="fixed bottom-2 right-2 md:bottom-6 md:right-6 flex flex-col gap-2 opacity-15 hover:opacity-100 transition z-50">
          <button
            type="button"
            onClick={scrollToTop}
            className="btn btn-square btn-primary btn-sm shadow-lg"
            aria-label="Scroll to top"
            title="Go up"
          >
            <IoChevronUp className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={scrollToBottom}
            className="btn btn-square btn-primary btn-sm shadow-lg"
            aria-label="Scroll to bottom"
            title="Go down"
          >
            <IoChevronDown className="w-5 h-5" />
          </button>
        </div>
      </div>
    </ProtectedLayout>
  );
}
