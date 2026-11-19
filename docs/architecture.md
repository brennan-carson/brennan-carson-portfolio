# Architecture

## Overview

A static single-page application built with React, TypeScript and Vite. There is no backend; all content is typed data in the repository, bundled at build time.

## Directory layout

```
src/
  app/          App root and route definitions
  components/
    layout/       Page shell: SiteLayout, Header, Footer
    navigation/   Navigation components
    projects/     Project-specific components (ProjectCard)
    ui/           Generic, content-agnostic primitives (Section, ButtonLink, StatusBadge, ThemeToggle)
  pages/        One component per route
  data/         Content as typed constants (site, projects, experience, skills)
  hooks/        Reusable hooks (useTheme)
  styles/       variables.css (tokens) and global.css (reset/element defaults)
  types/        Domain types for the data layer
tests/          Shared test setup
e2e/            Playwright specs
```

Components are grouped by role rather than by page. A component moves into `ui/` only when it has no knowledge of portfolio content. Tests are colocated with the code they cover (`*.test.ts(x)`).

## Routing

React Router's data router (`createBrowserRouter`) with one layout route wrapping all pages:

- `/` - minimal landing page with name, role and navigation
- `/about` - professional introduction, experience, selected skills, interests and contact; education is held out pending content approval
- `/projects` - project cards grouped by status
- `/projects/:slug` - project detail; unknown slugs render the not-found page
- `*` - not found

About sections use anchors (`/about#contact`). `SiteLayout` scrolls to the hash target after navigation, because React Router does not do this itself.

The router `basename` comes from Vite's `BASE_URL`, so the app works at `/` or under a GitHub Pages sub-path. The route table is exported separately from the browser router so tests can mount it with `createMemoryRouter`.

## Data organization

Content lives in `src/data/` as typed constants, with types in `src/types/`. Components receive data and render it; they hold no hard-coded content. `site.ts` holds identity, About copy, interests, optional education and professional links. `projects.ts` distinguishes development, completed, planned, and unconfirmed statuses. The owner-approved email and LinkedIn links are public; the phone number and resume file are not included. Unconfirmed project metrics and implementation details are not shown as facts.

## Styling

- `variables.css` defines design tokens (warm ink/paper colors, copper accent, display/body/mono type, spacing, radius and layout) as CSS custom properties. Dark is the default; `:root[data-theme='light']` overrides the color tokens.
- `global.css` contains only a reset, element defaults, focus styles, reduced-motion handling and the `.sr-only` utility.
- Each component owns a co-located `*.module.css` that consumes tokens. Components never hard-code colors.

## Theme management

`useTheme` stores `'dark' | 'light'`, writes it to `<html data-theme>` and persists it to `localStorage`. The default is dark rather than the OS preference, per the dark-first design goal. A small inline script in `index.html` applies the stored theme before first paint to avoid a flash; its key must stay in sync with `useTheme.ts`. Storage failures are tolerated.

`useTheme` keeps state locally and is used only by `ThemeToggle`. If more components need to read the theme, promote it to a context provider.

## Hosting and deployment

GitHub Pages hosts the static output at `https://brennan-carson.github.io/brennan-carson-portfolio/`. The CI workflow builds with `VITE_BASE_PATH=/brennan-carson-portfolio/`, preserves the base for client-side routing and assets, and uploads a `404.html` copy of the app shell for direct navigation to project routes. A successful verification on `main` triggers the Pages deployment; pull requests do not deploy. The repository's Pages source must be set to **GitHub Actions** in Settings → Pages.

## Key decisions and alternatives

| Decision                                                           | Alternative             | Reason                                                                                                  |
| ------------------------------------------------------------------ | ----------------------- | ------------------------------------------------------------------------------------------------------- |
| Vite                                                               | Next.js, CRA            | Static output, fast tooling, no server needed. CRA is deprecated.                                       |
| `BrowserRouter`-style routing                                      | `HashRouter`            | Clean URLs. GitHub Pages receives a `404.html` SPA fallback during deployment.                          |
| CSS Modules + variables                                            | Tailwind, CSS-in-JS     | No extra dependency or runtime, scoped styles, native theming.                                          |
| Warm paper/ink palette, display serif, and ruled editorial layouts | Generic dashboard cards | Gives the portfolio a distinct print-inspired identity without decoration that implies unbuilt systems. |
| Typed data files                                                   | CMS, Markdown/MDX       | Type-checked content with no infrastructure. Revisit MDX for long case studies.                         |
| Vitest + Testing Library                                           | Jest                    | Shares Vite config and transforms.                                                                      |
| ESLint 9 (flat config), strict type-checked rules                  | Looser presets          | Catches more bugs; `any` is an error. Pinned to 9 for plugin compatibility.                             |
| System font stack                                                  | Web fonts               | No external requests, fast, privacy-friendly.                                                           |
