# Brennan Carson - My Portfolio

A personal software engineering portfolio meant to showcase my experience, projects, and technical skills. I also wanted this site to be a portfolio-quality project in its own right by trying to create a clean, responsive, accessible, and statically hosted frontend.

## Technology stack

- React, TypeScript (strict), Vite
- React Router
- Plain CSS with CSS variables (design tokens) and CSS Modules
- Vitest and React Testing Library (unit/component tests)
- Playwright (end-to-end, prepared for future use)
- ESLint and Prettier
- GitHub Actions (CI and deployment); GitHub Pages static hosting

## Prerequisites

- Node.js 22 or newer
- npm 10 or newer

## Getting started

```bash
npm ci          # install exact dependencies from package-lock.json
npm run dev     # start the dev server at http://localhost:5173
```

## Scripts

| Command                | Purpose                                      |
| ---------------------- | -------------------------------------------- |
| `npm run dev`          | Start the Vite dev server                    |
| `npm run build`        | Type-check and produce a production build    |
| `npm run preview`      | Serve the production build locally           |
| `npm run lint`         | Run ESLint                                   |
| `npm run format`       | Format all files with Prettier               |
| `npm run format:check` | Verify formatting without changing files     |
| `npm run typecheck`    | Run the TypeScript compiler without emitting |
| `npm test`             | Run unit/component tests once                |
| `npm run test:watch`   | Run tests in watch mode                      |
| `npm run test:e2e`     | Run Playwright tests (see note below)        |

Run the full quality gate used by CI:

```bash
npm run format:check && npm run lint && npm run typecheck && npm test && npm run build
```

Before the first Playwright run, install a browser: `npx playwright install chromium`.

## Production build

```bash
npm run build     # output in dist/
npm run preview   # optional local check of dist/
```

GitHub Pages deploys the site at `https://brennan-carson.github.io/brennan-carson-portfolio/`. The workflow sets `VITE_BASE_PATH=/brennan-carson-portfolio/` for the production build and publishes only after all quality checks pass. To enable deployment, set the repository's Pages source to **GitHub Actions** in Settings → Pages.

## Documentation

- [Architecture](docs/architecture.md)
- [Development guide](docs/development.md)
