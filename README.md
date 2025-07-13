# NLW Agents - AI-Powered Q&A Platform

A full-stack AI-powered Q&A platform with audio transcription and semantic search capabilities. Users can record audio, ask questions, and receive intelligent answers based on the audio context using Google Gemini AI and vector embeddings.

## 🏗️ Project Structure

```
main-repo/
├── server/          # Backend API (Node.js + Fastify + Gemini AI)
└── web/            # Frontend (React + Vite)
```

## 🛠️ Tech Stack

### Backend (`/server`)
- **Node.js** with **TypeScript**
- **Fastify**: High-performance HTTP server with multipart support
- **Drizzle ORM**: Type-safe SQL ORM for PostgreSQL
- **PostgreSQL**: Database with pgvector extension for vector embeddings
- **Google Gemini AI**: Audio transcription and intelligent text generation
- **Zod**: Runtime schema validation
- **Docker**: Local database setup

### Frontend (`/web`)
- **React 19**: UI library
- **Vite**: Build tool and dev server
- **TypeScript**: Type safety
- **React Router DOM**: Client-side routing
- **@tanstack/react-query**: Data fetching and caching
- **React Hook Form**: Form management with validation
- **Zod**: Schema validation
- **Tailwind CSS**: Utility-first CSS framework with shadcn/ui
- **Radix UI**: Accessible UI primitives
- **MediaRecorder API**: Audio recording capabilities
- **Lucide React**: Icon library
- **dayjs**: Date formatting and manipulation

## 🚀 Quick Start

### Prerequisites
- Node.js (v18+)
- Docker (for database)
- Google Gemini API key
- npm or yarn

### 1. Start the Database
```bash
cd server
docker-compose up -d
```

### 2. Setup Backend
```bash
cd server
npm install

# Create .env file
echo "PORT=3333
DB_URL=postgresql://docker:docker@localhost:5432/agents
GEMINI_API_KEY=your_gemini_api_key_here" > .env

# Run migrations
npm run db:migrate

# Start development server
npm run dev
```

### 3. Setup Frontend
```bash
cd web
npm install
npm run dev
```

The application will be available at:
- Frontend: http://localhost:5173
- Backend API: http://localhost:3333

## 📁 Key Files

### Backend
- `server/src/server.ts` - Main entry point with Fastify setup
- `server/src/http/routes/create-question.ts` - AI-powered Q&A endpoint
- `server/src/http/routes/upload-audio.ts` - Audio transcription endpoint
- `server/src/services/gemini.ts` - Google Gemini AI integration
- `server/src/db/schema/` - Database schema (rooms, questions, audio chunks)
- `server/docker-compose.yml` - PostgreSQL with pgvector setup

### Frontend
- `web/src/main.tsx` - React entry point
- `web/src/app.tsx` - Main app component with routing
- `web/src/pages/room.tsx` - Q&A interface with audio recording
- `web/src/pages/record-room-audio.tsx` - Audio recording interface
- `web/src/components/question-form.tsx` - Question input with validation
- `web/src/components/question-list.tsx` - Q&A display
- `web/src/http/` - API hooks for data fetching and mutations

## 🛠️ Available Scripts

### Backend (`/server`)
- `npm run dev` - Start development server
- `npm start` - Start production server
- `npm run db:seed` - Seed database with sample data
- `npm run db:generate` - Generate database migrations
- `npm run db:migrate` - Run database migrations

### Frontend (`/web`)
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 📡 API Endpoints

- `GET /rooms` - List all rooms with question counts
- `POST /rooms` - Create a new room
- `GET /rooms/:roomId/questions` - Get questions for a room
- `POST /rooms/:roomId/questions` - Create question with AI answer
- `POST /rooms/:roomId/audio` - Upload and transcribe audio
- `GET /health` - Health check endpoint

## 🗄️ Database Schema

**Rooms Table:**
- `id` (UUID, Primary Key) - Unique room identifier
- `name` (Text, Required) - Room name
- `description` (Text, Optional) - Room description
- `created_at` (Timestamp) - Creation timestamp

**Questions Table:**
- `id` (UUID, Primary Key) - Unique question identifier
- `room_id` (UUID, Foreign Key) - Reference to room
- `question` (Text, Required) - User's question
- `answer` (Text, Optional) - AI-generated answer
- `created_at` (Timestamp) - Creation timestamp

**Audio Chunks Table:**
- `id` (UUID, Primary Key) - Unique chunk identifier
- `room_id` (UUID, Foreign Key) - Reference to room
- `transcript` (Text, Required) - Transcribed audio text
- `embedding` (Vector, Required) - 768-dimensional embedding
- `created_at` (Timestamp) - Creation timestamp

## 🤖 AI Features

**Audio Transcription:**
- Uses Google Gemini 2.5 Flash for audio-to-text conversion
- Supports multiple audio formats
- Generates natural, punctuated transcriptions

**Vector Embeddings:**
- Generates 768-dimensional embeddings for questions and transcripts
- Uses pgvector for similarity search
- Enables semantic search across audio content

**AI-Powered Q&A:**
- Semantic search through audio transcripts
- Context-aware answer generation
- Professional and educational tone
- Source citation from audio context

## 🔧 Development

Both projects use **Biome** for linting and formatting. Run `npx @biomejs/biome check` to lint and `npx @biomejs/biome format` to format code.

## 📚 Dependencies

### Backend
- Fastify ecosystem (fastify, @fastify/cors, @fastify/multipart, fastify-type-provider-zod)
- Database (drizzle-orm, postgres with pgvector)
- AI (@google/genai for Gemini AI integration)
- Validation (zod)
- Development tools (typescript, @biomejs/biome)

### Frontend
- React ecosystem (react, react-dom, react-router-dom)
- Data fetching (@tanstack/react-query)
- Forms (react-hook-form, @hookform/resolvers, zod)
- Styling (tailwindcss, @radix-ui/react-slot, tw-animate-css)
- Utilities (class-variance-authority, clsx, lucide-react, tailwind-merge, dayjs)
- Build tools (vite, typescript, @biomejs/biome)

## 🙌 Credits

Developed during the Rocketseat NLW event. 