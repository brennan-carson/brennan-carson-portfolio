# Development guide

## Local workflow

1. `npm ci` once, then `npm run dev`.
2. Make changes; Vite hot-reloads.
3. Before committing, run `npm run format`, `npm run lint`, `npm run typecheck` and `npm test`.
4. Use `npm run build && npm run preview` to check the production bundle.

## Conventions

- Strict TypeScript; no `any` (enforced by ESLint). Use `import type` for type-only imports.
- Named exports for components; one component per file, file named after the component.
- Each component has a co-located `Component.module.css`. Use design tokens from `variables.css`; no hard-coded colors.
- Content belongs in `src/data/`, not in JSX.
- Semantic HTML first; add ARIA only where HTML cannot express the meaning. Every interactive element needs an accessible name and a visible focus state.
- Add an abstraction only when there is a second real use.
- Never present a project as completed unless it is. Use `status: 'in-development'` otherwise. Do not invent metrics or accomplishments.

## Linting and formatting

- ESLint (flat config in `eslint.config.js`): TypeScript strict type-checked rules, React Hooks rules and jsx-a11y.
- Prettier (`.prettierrc.json`) owns formatting; `eslint-config-prettier` disables conflicting lint rules.
- `npm run format:check` and `npm run lint` run in CI.

## Testing strategy

- **Unit/component (Vitest + Testing Library):** colocated `*.test.ts(x)` files. Query by role and accessible name, as users do. Shared setup is in `tests/setup.ts`.
- **End-to-end (Playwright):** specs in `e2e/`, run against the production build via `npm run test:e2e`. One smoke test exists; add flows as the site grows. Not yet part of CI. Install a browser first with `npx playwright install chromium`.

## Git workflow

- `main` is always deployable.
- Branch from `main` (`feature/...`, `fix/...`, `docs/...`), open a pull request, and merge when CI passes.
- Write imperative, focused commit messages (for example, "Add Watchtower project entry").

## Adding a project

1. Open `src/data/projects.ts` and add an object matching `Project` in `src/types/project.ts`.
2. Choose a unique, URL-safe `slug`; it becomes `/projects/<slug>`.
3. Set `status` honestly: `'in-development'`, `'planned'` or `'completed'`.
4. Fill in `technologies` and `links` (use real URLs only).
5. Confirm the card appears on the home page and the detail page loads.

## Adding an experience entry

1. Add an object matching `ExperienceEntry` (`src/types/experience.ts`) to `src/data/experience.ts` with a unique `id`.
2. Use only verified responsibilities and accomplishments.
3. The home page renders the role, company, dates, location, accomplishments, responsibilities and technologies from each entry.

## Personal details

Update `src/data/site.ts` for the summary and professional links. Do not add private contact details unless they are intentionally approved for publication. The resume PDF is not currently included in the repository; add a public copy only after confirming it contains no details you do not want published.

## Deployment (future)

CI builds but does not deploy. GitHub Pages requires a deploy workflow, `VITE_BASE_PATH` for a project site, and a `404.html` copy of `index.html` for client-side routes. Not set up yet.
