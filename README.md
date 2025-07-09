# NLW Agents

A full-stack web application for managing rooms and agents, developed during a Rocketseat NLW event. This project demonstrates modern development practices with a React frontend and Node.js backend.

## 🏗️ Project Structure

```
main-repo/
├── server/          # Backend API (Node.js + Fastify)
└── web/            # Frontend (React + Vite)
```

## 🛠️ Tech Stack

### Backend (`/server`)
- **Node.js** with **TypeScript**
- **Fastify**: High-performance HTTP server
- **Drizzle ORM**: Type-safe SQL ORM for PostgreSQL
- **PostgreSQL** with pgvector extension
- **Zod**: Runtime schema validation
- **Docker**: Local database setup

### Frontend (`/web`)
- **React 19**: UI library
- **Vite**: Build tool and dev server
- **TypeScript**: Type safety
- **React Router DOM**: Client-side routing
- **@tanstack/react-query**: Data fetching and caching
- **Tailwind CSS**: Utility-first CSS framework
- **Radix UI**: Accessible UI primitives
- **Lucide React**: Icon library

## 🚀 Quick Start

### Prerequisites
- Node.js (v18+)
- Docker (for database)
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
DB_URL=postgresql://docker:docker@localhost:5432/agents" > .env

# Run migrations
npx drizzle-kit migrate

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
- `server/src/server.ts` - Main entry point
- `server/src/http/rotes/` - API route handlers
- `server/src/db/schema/` - Database schema
- `server/docker-compose.yml` - Database setup

### Frontend
- `web/src/main.tsx` - App entry point
- `web/src/pages/` - Route-based components
- `web/src/components/` - Reusable UI components
- `web/src/app.tsx` - Main app component

## 🛠️ Available Scripts

### Backend (`/server`)
- `npm run dev` - Start development server
- `npm start` - Start production server
- `npm run db:seed` - Seed database

### Frontend (`/web`)
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 📡 API Endpoints

- `GET /rooms` - List all rooms
- `GET /rooms/:id` - Get specific room

## 🔧 Development

Both projects use **Biome** for linting and formatting. Run `npx @biomejs/biome check` to lint and `npx @biomejs/biome format` to format code.

## 📚 Dependencies

### Backend
- Fastify ecosystem (fastify, @fastify/cors, fastify-type-provider-zod)
- Database (drizzle-orm, postgres)
- Validation (zod)
- Development tools (typescript, @biomejs/biome)

### Frontend
- React ecosystem (react, react-dom, react-router-dom)
- Data fetching (@tanstack/react-query)
- Styling (tailwindcss, @radix-ui/react-slot)
- Utilities (class-variance-authority, clsx, lucide-react)
- Build tools (vite, typescript, @biomejs/biome)

## 🙌 Credits

Developed during the Rocketseat NLW event. 