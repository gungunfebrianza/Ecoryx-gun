# ESG Report Convert AI

An AI-powered Next.js application that analyzes ESG (Environmental, Social, and Governance) reports and converts them to structured SASB (Sustainability Accounting Standards Board) metrics using OpenAI's language models.

## Features

- **PDF Upload & Analysis**: Upload ESG reports in PDF format for automated analysis
- **AI-Powered Extraction**: Uses OpenAI GPT models to extract relevant ESG metrics
- **SASB Standards Support**:
  - SASB Oil & Gas - Exploration & Production
- **Real-time Streaming**: View analysis results as they're generated
- **Markdown Output**: Structured, readable format for extracted metrics

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 18.0 or higher ([Download here](https://nodejs.org/))
- **npm**, **yarn**, **pnpm**, or **bun**: Package manager (npm comes with Node.js)
- **OpenAI API Key**: Get one from [OpenAI Platform](https://platform.openai.com/api-keys)

## Installation

### 1. Clone the Repository

```bash
git clone <repository-url>
cd Ecoryx-gun
```

### 2. Install Dependencies

Choose your preferred package manager:

```bash
# Using npm
npm install

# Using yarn
yarn install

# Using pnpm
pnpm install

# Using bun
bun install
```

### 3. Environment Configuration

Create a `.env.local` file in the root directory:

```bash
# On Windows
copy .env.example .env.local

# On macOS/Linux
cp .env.example .env.local
```

If `.env.example` doesn't exist, create `.env.local` manually with the following content:

```env
NEXT_PUBLIC_API_URL="/api/"
OPENAI_API_KEY=your_openai_api_key_here
```

**Important**: Replace `your_openai_api_key_here` with your actual OpenAI API key.

### 4. Verify Installation

Run the following command to check if everything is set up correctly:

```bash
npm run lint
```

## Running the Application

### Development Mode

Start the development server with hot-reload:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

The page will automatically reload when you make changes to the code.

### Production Build

Build the application for production:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## Usage

### Analyzing an ESG Report

1. **Open the Application**: Navigate to [http://localhost:3000](http://localhost:3000)

2. **Select a Template**: Choose an appropriate SASB standard template:
   - SASB Extractive & Minerals Processing - Oil & Gas - Exploration
   - SASB Manufacturing - Chemicals & Materials

3. **Upload PDF**: Click the file upload button and select your ESG report (PDF format)

4. **Start Analysis**: Click the "Analyze" button to begin processing

5. **View Results**: The AI will stream results in real-time, extracting metrics according to the selected SASB standard

6. **Stop Analysis**: Use the stop button if you need to cancel the ongoing analysis

### Understanding the Results

The analysis provides:

- **Metric Names**: SASB-standard metric identifiers
- **Extracted Values**: Data points found in the report
- **Context**: Relevant excerpts from the source document
- **Formatting**: Clean markdown format for easy reading

## Project Structure

```
esg-report-convert-ai-nextjs/
├── src/
│   ├── components/          # React components
│   │   ├── form/           # Form input components
│   │   └── layout/         # Layout components
│   ├── data/               # SASB template data
│   │   ├── sasb-oil-and-gas.json
│   │   └── sasb-manufacturing-chemicals-materials.json
│   ├── helpers/            # Utility functions
│   ├── pages/              # Next.js pages and API routes
│   │   ├── api/
│   │   │   └── analyze.ts  # Main analysis API endpoint
│   │   └── index.tsx       # Main application page
│   ├── stores/             # State management (Pullstate)
│   └── styles/             # Global styles
├── public/                 # Static assets
├── .env.local             # Environment variables (create this)
├── next.config.ts         # Next.js configuration
├── package.json           # Project dependencies
└── tsconfig.json          # TypeScript configuration
```

## API Endpoints

### POST /api/analyze

Analyzes an ESG report PDF and extracts SASB metrics.

**Request**:

- Method: POST
- Content-Type: multipart/form-data
- Body:
  - `file`: PDF file
  - `templateId`: SASB template ID (`sasb-oil-and-gas` or `sasb-manufacturing-chemicals-materials`)

**Response**:

- Streaming text/plain with JSON-formatted chunks
- Each chunk contains:
  ```json
  {
    "type": "status" | "error" | "message",
    "message": "Status or content message",
    "data": { /* Additional data */ }
  }
  ```

## Technologies Used

- **Framework**: [Next.js 16](https://nextjs.org/) (Pages Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **AI/ML**:
  - [LangChain](https://js.langchain.com/) - AI orchestration
  - [OpenAI GPT](https://openai.com/) - Language model
- **UI**:
  - [React 19](https://react.dev/)
  - [Tailwind CSS 4](https://tailwindcss.com/)
  - [DaisyUI](https://daisyui.com/)
- **State Management**: [Pullstate](https://lostpebble.github.io/pullstate/)
- **File Processing**: [unpdf](https://github.com/unjs/unpdf), [formidable](https://github.com/node-formidable/formidable)

## Troubleshooting

### Common Issues

**"OPENAI_API_KEY is not set" Error**

- Ensure `.env.local` exists in the root directory
- Verify your API key is correctly set
- Restart the development server after adding the key

**PDF Upload Fails**

- Check that the file is a valid PDF
- Ensure the file size is reasonable (< 10MB recommended)
- Verify the file is not corrupted or password-protected

**Analysis Not Starting**

- Confirm a template is selected before uploading
- Check browser console for error messages
- Verify your OpenAI API key has available credits

**Build Errors**

- Run `npm install` to ensure all dependencies are installed
- Delete `node_modules` and `.next` folder, then reinstall
- Check Node.js version (should be 18+)

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

### Adding New SASB Templates

1. Create a new JSON file in `src/data/` with your SASB metrics
2. Update the template list in [src/pages/index.tsx](src/pages/index.tsx)
3. Add the template handling in [src/pages/api/analyze.ts](src/pages/api/analyze.ts)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is private and proprietary.

## Support

For questions or issues, please contact the development team or open an issue in the repository.

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Powered by [OpenAI](https://openai.com/)
- SASB standards from [SASB Foundation](https://www.sasb.org/)
