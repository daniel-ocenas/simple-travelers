# Coding Conventions

## File Naming

| Type | Pattern | Example |
|---|---|---|
| App Router page | `page.tsx` | `src/app/blog/page.tsx` |
| App Router layout | `layout.tsx` | `src/app/layout.tsx` |
| App Router route handler | `route.ts` | `src/app/api/foo/route.ts` |
| Component | `kebab-case.tsx` | `posts-grid.tsx`, `social-item.tsx` |
| Hook | `use-<name>.ts` | `use-breakpoint.ts` |
| Type module | `<Domain>.types.ts` | `Article.types.ts` |
| Redux slice | `<Domain>.store.tsx` | `Article.store.tsx` |
| Redux thunks/api | `<Domain>.api.ts` | `Article.api.ts` |
| Utility | `camelCase.ts` | `getBlurImage.ts`, `toUniqueArray.ts` |

Files are mostly `kebab-case`. Utility functions stick with `camelCase.ts` to match what already exists in `src/utils/`. Components are `PascalCase`, hooks are `camelCase` starting with `use`.

## Components

- Functional components only. Named export OR `export default function` — both exist in this codebase; match the surrounding file's pattern.
- Props typed inline as an `interface` or `type` named `<Component>Props` when reused; inline destructured types are fine for one-off prop bags.
- No `class` components.
- **React Compiler is enabled.** Do NOT add `React.memo`, `useMemo`, or `useCallback` by default — the compiler handles it. Only add manual memoization if you've measured a real perf win.

## Hooks

- One hook = one concern.
- Browser-API hooks (`use-scroll`, `use-hover`, ...) must be SSR-safe — guard `window` / `document` access behind a `useEffect` or a mount flag.
- Don't `// eslint-disable react-hooks/exhaustive-deps` — fix the deps.

## TypeScript

- `strict: true` is on. Don't fight it.
- No `as unknown as T`, no `as any`. Use `unknown` over `any`; narrow with type guards.
- Prefer `satisfies` for literal config objects that need both inference and constraint checking.
- The CMS content type (`ArticleComponent` in `src/store/Article/Article.types.ts`) is loose by design — leave it alone unless the user asks to tighten it.

## Server vs Client Components

- Default: server component (no `'use client'` directive).
- Add `'use client'` ONLY when the file uses: React hooks, Redux, `next-themes`, event handlers, browser APIs, or third-party libs that touch the DOM.
- Push the client boundary AS DEEP AS POSSIBLE. A page can be a server component even if its children are client components.
- Data fetching in server components is fine via `async function PageName()` directly. Don't reach for `useEffect` to fetch on the client when SSR would do.

## State

| Kind | Where it lives |
|---|---|
| Server-fetched data (already loaded at SSR time) | Props down from server component |
| Cross-component UI state (filters, theme, query) | Redux Toolkit slice under `src/store/<Domain>/` |
| Local UI state (toggle, hover, mobile-menu-open) | `useState` in the client component |
| URL state | `useSearchParams` / `useParams` from `next/navigation` |
| Form state (single form, transient) | `useState` is fine; reach for RHF only if forms grow complex |

Don't shadow Redux state in `useState`. Don't shadow server-component props in Redux.

## Side Effects

- Browser APIs (`window`, `document`, `localStorage`, `IntersectionObserver`) — only inside `useEffect` or guarded by `typeof window !== 'undefined'`.
- DOM-touching libraries (analytics, chart libs) — only in client components, ideally lazy-loaded with `next/dynamic`.

## Comments

- Default: no comments. Names self-document.
- Add a comment only for non-obvious WHY: a hidden constraint, an upstream quirk, a workaround for a known bug.
- Never `// removed: ...` after deleting code.
- Never reference the current task / PR / issue in code comments.

## Magic Values

- Pull magic numbers / strings into a named `const`.
- `as const` arrays for enumerations of known string options.
- Project-wide constants live in `src/constants/constants.ts`.

## Don'ts

- Don't add features / refactor surrounding code / introduce abstractions beyond what the task requires.
- Don't add error handling for scenarios that can't happen.
- Don't keep unused imports / variables.
- Don't add `'use client'` to a file that doesn't need it.
- Don't hand-author memoization (`useMemo`/`useCallback`/`React.memo`) unless profiling shows a benefit — see React Compiler note above.
- Don't reach for Redux for state that's already a prop.
