# Brennan Carson - Portfolio

A personal software engineering portfolio: experience, projects, and technical skills. The site is also intended to be a portfolio-quality project in its own right: a clean, responsive, accessible, statically hosted frontend.

Content is placeholder where details are not finalized. Projects that are unfinished are labeled "In Development".

## Technology stack

- React, TypeScript (strict), Vite
- React Router
- Plain CSS with CSS variables (design tokens) and CSS Modules
- Vitest and React Testing Library (unit/component tests)
- Playwright (end-to-end, prepared for future use)
- ESLint and Prettier
- GitHub Actions (CI); GitHub Pages is the intended static host

No backend or database.

## Prerequisites

- Node.js 22 or newer
- npm 10 or newer

## Getting started

```bash
npm ci          # install exact dependencies from package-lock.json
npm run dev     # start the dev server at http://localhost:5173
```

## Scripts

| Command                | Purpose                                        |
| ---------------------- | ---------------------------------------------- |
| `npm run dev`          | Start the Vite dev server                      |
| `npm run build`        | Type-check and produce a production build      |
| `npm run preview`      | Serve the production build locally             |
| `npm run lint`         | Run ESLint                                     |
| `npm run format`       | Format all files with Prettier                 |
| `npm run format:check` | Verify formatting without changing files       |
| `npm run typecheck`    | Run the TypeScript compiler without emitting   |
| `npm test`             | Run unit/component tests once                  |
| `npm run test:watch`   | Run tests in watch mode                        |
| `npm run test:e2e`     | Run Playwright tests (see note below)          |

Run the full quality gate used by CI:

```bash
npm run format:check && npm run lint && npm run typecheck && npm test && npm run build
```

Before the first Playwright run, install a browser: `npx playwright install chromium`.

## Resume

Place the PDF at `public/resume/brennan-carson-resume.pdf`. Until it exists, the home page "Resume" link will 404.

## Production build

```bash
npm run build     # output in dist/
npm run preview   # optional local check of dist/
```

When hosting under a sub-path (GitHub Pages project site), set `VITE_BASE_PATH`, for example `VITE_BASE_PATH=/brennan-carson-portfolio/ npm run build`.

## Documentation

- [Architecture](docs/architecture.md)
- [Development guide](docs/development.md)
