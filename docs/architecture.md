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

- `/` - home (introduction, experience, projects, skills, contact sections)
- `/projects/:slug` - project detail; unknown slugs render the not-found page
- `*` - not found

Home sections are anchors (`/#projects`). `SiteLayout` scrolls to the hash target after navigation, because React Router does not do this itself.

The router `basename` comes from Vite's `BASE_URL`, so the app works at `/` or under a GitHub Pages sub-path. The route table is exported separately from the browser router so tests can mount it with `createMemoryRouter`.

## Data organization

Content lives in `src/data/` as typed constants, with types in `src/types/`. Components receive data and render it; they hold no hard-coded content. Empty arrays are valid and render placeholders, so no unverified claims are shown. `site.ts` holds identity and links; optional links (LinkedIn, email) are hidden while undefined.

## Styling

- `variables.css` defines design tokens (color, type scale, spacing, radius, layout) as CSS custom properties. Dark is the default; `:root[data-theme='light']` overrides the color tokens.
- `global.css` contains only a reset, element defaults, focus styles, reduced-motion handling and the `.sr-only` utility.
- Each component owns a co-located `*.module.css` that consumes tokens. Components never hard-code colors.

## Theme management

`useTheme` stores `'dark' | 'light'`, writes it to `<html data-theme>` and persists it to `localStorage`. The default is dark rather than the OS preference, per the dark-first design goal. A small inline script in `index.html` applies the stored theme before first paint to avoid a flash; its key must stay in sync with `useTheme.ts`. Storage failures are tolerated.

`useTheme` keeps state locally and is used only by `ThemeToggle`. If more components need to read the theme, promote it to a context provider.

## Key decisions and alternatives

| Decision                            | Alternative                       | Reason                                                                           |
| ----------------------------------- | --------------------------------- | -------------------------------------------------------------------------------- |
| Vite                                | Next.js, CRA                      | Static output, fast tooling, no server needed. CRA is deprecated.                |
| `BrowserRouter`-style routing       | `HashRouter`                      | Clean URLs. Needs a 404 fallback on GitHub Pages (to be added at deploy time).   |
| CSS Modules + variables             | Tailwind, CSS-in-JS               | No extra dependency or runtime, scoped styles, native theming.                   |
| Typed data files                    | CMS, Markdown/MDX                 | Type-checked content with no infrastructure. Revisit MDX for long case studies.  |
| Vitest + Testing Library            | Jest                              | Shares Vite config and transforms.                                               |
| ESLint 9 (flat config), strict type-checked rules | Looser presets      | Catches more bugs; `any` is an error. Pinned to 9 for plugin compatibility.      |
| System font stack                   | Web fonts                         | No external requests, fast, privacy-friendly.                                    |
