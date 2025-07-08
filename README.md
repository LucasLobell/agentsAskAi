# NLW Agents

NLW Agents is a web application developed during a Rocketseat event. This project demonstrates modern React development practices, leveraging a robust set of libraries and patterns for scalability and maintainability.

## 🚀 Tech Stack

- **React 19**: UI library for building interactive interfaces.
- **Vite**: Fast build tool and development server.
- **TypeScript**: Type safety for JavaScript.
- **React Router DOM**: Client-side routing.
- **@tanstack/react-query**: Data fetching and caching.
- **Tailwind CSS**: Utility-first CSS framework.
- **Radix UI**: Accessible UI primitives.
- **Class Variance Authority (CVA)**: Variant management for class names.
- **clsx** and **tailwind-merge**: Utility for conditional class names and merging Tailwind classes.
- **Lucide React**: Icon library.
- **Biome**: Code formatting and linting.

## 🗂️ Project Structure & Patterns

- **Component-based**: UI is split into reusable components (`src/components`).
- **Pages**: Route-based page components in `src/pages`.
- **Utilities**: Shared helpers in `src/lib`.
- **Routing**: Managed with React Router.
- **State/Data**: Server state handled by React Query.
- **Styling**: Tailwind CSS with utility helpers for class management.

## ⚙️ Setup Instructions

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## 🛠️ Project Configuration

- **Vite** is configured in `vite.config.ts` with React and Tailwind plugins.
- **TypeScript** configuration is in `tsconfig.json` and `tsconfig.app.json`.
- **Tailwind CSS** is used for styling (configuration file not found, but dependencies and usage are present).
- **Path Aliases**: `@` is aliased to `src/` for cleaner imports.

## 🙌 Credits

Developed during the Rocketseat NLW event. 