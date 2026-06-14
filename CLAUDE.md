# Simple Travelers — Project Knowledge

## Overview

Simple Travelers is a personal travel blog at [simpletravelers.sk](https://simpletravelers.sk/). It is a **single-repo Next.js 16 fullstack app** (App Router + a tiny `src/pages/api/` for one revalidation handler). Static-first content rendering with optional MongoDB-backed CMS path (currently dormant — articles are served from `src/data/article-list.ts`). Slovak-language content. Hosted on **Vercel** with auto-deploy from `main`.

The audience is fellow travelers, not engineers — so UX, image performance, and SEO matter more than feature complexity.

---

## AI Self-Maintenance Rule

> [!CAUTION]
> **MANDATORY: After every major change, update this file to reflect the current state.**

After adding or modifying any of the following, update the corresponding section:
- **New page / route** → "Pages & Routes" table
- **New shared component** → "Shared Components" table
- **New hook** → "Custom Hooks" table
- **New gotcha** → "Gotchas & Pitfalls" table
- **New env var** → "Environment" table

This file is the **single source of truth** for AI sessions.

---

## Tech Stack

| Layer | Tech | Notes |
|---|---|---|
| Framework | Next.js 16 (App Router) | `src/app/` is the primary router; `src/pages/api/revalidate.ts` is a legacy holdout. New API routes go under `src/app/<route>/route.ts`. |
| React | React 19 | Functional components only. React Compiler is enabled (`reactCompiler: true` in `next.config.mjs`) — do NOT hand-add `useMemo` / `useCallback` / `React.memo` unless profiling shows a benefit. |
| Language | TypeScript (strict) | `@/*` → `./src/*` |
| State | Redux Toolkit + react-redux | `globalStore` factory; typed `useAppDispatch` / `useAppSelector` in `src/store/AppStore.tsx`. Slices live under `src/store/<Domain>/`. |
| Styling | Tailwind CSS 3 + `next-themes` | `darkMode: 'class'`. Custom tokens: `customGray.*`, `dividerShadow.*`, `text-shadow-custom`. NO design-system library — Tailwind utilities + `next/image` + `next/link` are the primitives. |
| Data | MongoDB (`mongodb` driver) | Helpers in `src/lib/mongodb/` use `dbConnect`. Currently dormant — `src/services/posts.ts` returns from the static `ArticleList`. |
| Image placeholders | `plaiceholder` + `@plaiceholder/next` | `src/utils/getBlurImage.ts` produces base64 blurs. |
| Fonts | `next/font/google` (Nunito) | Loaded once in `src/app/layout.tsx`. |
| Icons | `react-icons` | Used inline; no shared `<Icon>` wrapper. |
| Linting | ESLint (`next/core-web-vitals` + `react-hooks`) | |
| Formatting | Prettier + `@trivago/prettier-plugin-sort-imports` + `prettier-plugin-tailwindcss` | Import order is enforced — see `.agent/rules/imports.md`. |
| Deploy | Vercel | Auto on push to `main`. |

---

## Project Structure

| Directory | Description |
|---|---|
| `src/app/` | Next.js App Router pages, layout, route handlers, metadata |
| `src/app/<route>/page.tsx` | Server component by default; mark `'use client'` only when needed |
| `src/pages/api/revalidate.ts` | Legacy Pages-Router API route (ISR revalidation hook) |
| `src/components/<feature>/` | Components grouped by feature (`header`, `posts`, `gallery`, `admin`, ...) |
| `src/ui/` | Reusable, feature-agnostic UI primitives (`Button` + `buttonClasses`, `Link`, `Input`, `Textarea`, `Alert`, `DataTable`, `EmptyState`, `PageHeader`, `StatusPill`, `TagList`) |
| `src/store/` | Redux Toolkit — `AppStore.tsx` + per-domain slices under `Article/`, `User/` |
| `src/services/` | Service-layer functions consumed by pages (e.g. `getAllPosts`) |
| `src/lib/mongodb/` | MongoDB helpers (`dbConnect`, `article-get`, `article-list`, `create-article`) — currently dormant |
| `src/lib/r2/` | Cloudflare R2 client + upload/delete helpers (`client`, `upload`, `delete`) |
| `src/lib/rate-limit/` | In-memory rate limiter — `limiter.ts` (`consume` + `RATE_LIMITS` config), `http.ts` (`clientIp`, `enforceRateLimit` 429 helper) |
| `src/data/` | Static seed data (`article-list.ts`, `gallery-images.ts`) |
| `src/hooks/` | Reusable hooks (`use-breakpoint`, `use-scroll`, `use-mounted`, `use-hover`, `use-focus`) |
| `src/utils/` | Pure utilities (`getBlurImage`, `getErrorMessage`, `getBaseUrl`, `isTouchDevice`, `toUniqueArray`) |
| `src/constants/` | Project-wide constants |
| `src/styles/globals.css` | Global Tailwind layer + custom CSS classes (`.bg-glass`, `.scrollbar`, ...) |
| `public/static/` | Images, icons, videos |
| `.agent/` | Agent rules, workflows, skills (documentation, not platform-magic) |

---

## Pages & Routes

| Route | File | Type | Description |
|---|---|---|---|
| `/` | `src/app/page.tsx` | Server | Landing — `About`, `PostsGrid`, `InstagramGrid` |
| `/about` | `src/app/about/page.tsx` | Server | About-us page |
| `/blog` | `src/app/blog/page.tsx` | Server | List of blog posts |
| `/blog/[slug]` | `src/app/blog/[slug]/page.tsx` | Server | Single article; uses `generateStaticParams` + `generateMetadata` |
| `/gallery` | `src/app/gallery/page.tsx` | Server | Photo gallery |
| `/videos` | `src/app/videos/page.tsx` | Server | Video gallery |
| `/pdf-export` | `src/app/pdf-export/page.tsx` | Server | PDF export view |
| `/cache` | `src/app/cache/page.tsx` | Server | Cache utility page |
| `/admin` | `src/app/(admin)/admin/page.tsx` | Server (dynamic) | Admin dashboard (auth-gated by `(admin)/layout.tsx`) |
| `/admin/login` | `src/app/(admin)/admin/login/page.tsx` | Client form | Editor password login (`loginAction`) |
| `/admin/articles` | `src/app/(admin)/admin/articles/page.tsx` | Server (dynamic) | Article list (`ArticlesTable`) |
| `/admin/articles/new` | `src/app/(admin)/admin/articles/new/page.tsx` | Server (dynamic) | Create article — renders `ArticleEditor` with a blank `emptyArticle()`, `mode="create"` |
| `/admin/articles/[slug]` | `src/app/(admin)/admin/articles/[slug]/page.tsx` | Server (dynamic) | Edit article — `ArticleEditor`, `mode="edit"` |
| `/admin/media` | `src/app/(admin)/admin/media/page.tsx` | Server (dynamic) | Media library (R2 upload/browse/delete) |
| `/api/upload` | `src/app/api/upload/route.ts` | App route | Admin image upload → R2 (rate-limited) |
| `/api/assets` | `src/app/api/assets/route.ts` | App route | List (GET) / delete (DELETE) R2 assets (rate-limited) |
| `/api/revalidate` | `src/pages/api/revalidate.ts` | Pages-API | On-demand ISR revalidation |

Server vs Client: routes are server components by default. Reach for `'use client'` ONLY for files that use hooks, Redux, theme, browser APIs, or event handlers. See `[[.agent/rules/nextjs-patterns]]`.

---

## Shared Components

| Component | Location | Description |
|---|---|---|
| `Header` | [`src/components/header/header.tsx`](src/components/header/header.tsx) | Responsive nav (desktop `<NavList>` / mobile `<NavMenu>`); theme-aware logo |
| `AdminHeader` | [`src/components/admin/admin-header.tsx`](src/components/admin/admin-header.tsx) | Admin CMS top nav (rendered by `(admin)/layout.tsx` only when authed) |
| `Button` (+ `buttonClasses`) | [`src/ui/button.tsx`](src/ui/button.tsx) | Themed button primitive — `variant` (primary/secondary/ghost/danger) + `size` (xs/sm/md/lg). Use `buttonClasses()` for `<Link>`/`<a>` CTAs. Admin UI uses this everywhere; `className` is layout-only (no tailwind-merge). |
| `Link` | [`src/ui/link.tsx`](src/ui/link.tsx) | Themed `next/link` wrapper — `variant` (plain/nav/muted). Reach for this for text links; use `buttonClasses()` for button-styled CTAs. |
| `Input` / `Textarea` | [`src/ui/input.tsx`](src/ui/input.tsx), [`src/ui/textarea.tsx`](src/ui/textarea.tsx) | Themed form fields (`Input` has `inputSize` sm/md/lg) |
| `Alert` | [`src/ui/alert.tsx`](src/ui/alert.tsx) | Inline form-feedback banner (`variant` error/success) |
| `ArticleEditor` | [`src/components/admin/editor/article-editor.tsx`](src/components/admin/editor/article-editor.tsx) | Shared create/edit form (`mode` create/edit); editable slug, status, hero picker, TipTap body. Saves via `saveArticleAction`. |
| `Footer` | [`src/components/footer/footer.tsx`](src/components/footer/footer.tsx) | Footer block |
| `WelcomePhoto` | [`src/components/welcome-photo/welcome-photo.tsx`](src/components/welcome-photo/welcome-photo.tsx) | Hero photo on every page (full-bleed background) |
| `ScrollTop` | [`src/components/buttons/scroll-top.tsx`](src/components/buttons/scroll-top.tsx) | Back-to-top button |
| `Burger` | [`src/components/buttons/burger.tsx`](src/components/buttons/burger.tsx) | Mobile menu toggle |
| `Provider` | [`src/components/providers/provider.tsx`](src/components/providers/provider.tsx) | Wraps `ThemeProvider` + `ReduxProvider` |
| `ReduxProvider` | [`src/components/providers/redux-provider.tsx`](src/components/providers/redux-provider.tsx) | Instantiates `globalStore()` once on the client |
| `ThemeToggle` | [`src/components/theme-toggle/theme-toggle.tsx`](src/components/theme-toggle/theme-toggle.tsx) | Light/dark toggle via `next-themes` |
| `SocialNetworkLinks` | [`src/components/social-side-bar/social-network-links.tsx`](src/components/social-side-bar/social-network-links.tsx) | Social-link strip |
| `Card` (post card) | [`src/components/posts/card.tsx`](src/components/posts/card.tsx) | Blog post card with image + title + categories |
| `PostsGrid` | [`src/components/posts/posts-grid.tsx`](src/components/posts/posts-grid.tsx) | Grid of `Card` |
| `RelatedPosts` | [`src/components/posts/related-posts.tsx`](src/components/posts/related-posts.tsx) | Sidebar of related articles |
| `Article*` (renderer set) | [`src/components/article/`](src/components/article/) | Renders the typed CMS content blocks (`h2`/`h3`/`h4`/`p`/`img`/`video`/`link`) |
| `CategoryFilter` / `CategoryList` | [`src/components/category/`](src/components/category/) | Category filter + chips |
| `SearchBar` | [`src/components/search/search-bar.tsx`](src/components/search/search-bar.tsx) | Article search input |
| `Gallery` | [`src/components/gallery/gallery.tsx`](src/components/gallery/gallery.tsx) | Photo gallery layout |
| `Videos` | [`src/components/video/videos.tsx`](src/components/video/videos.tsx) | Video listing |
| `InstagramGrid` | [`src/components/instagram-grid/instagram-grid.tsx`](src/components/instagram-grid/instagram-grid.tsx) | Recent Instagram posts grid |
| `About` (set) | [`src/components/about/`](src/components/about/) | About page sections |

---

## Custom Hooks

| Hook | Location | Description |
|---|---|---|
| `useBreakpoint` (+ `useSmall`, `useMedium`, `useLarge`) | [`src/hooks/use-breakpoint.ts`](src/hooks/use-breakpoint.ts) | Tailwind-aligned breakpoint detection |
| `useScroll` | [`src/hooks/use-scroll.ts`](src/hooks/use-scroll.ts) | Window scroll position |
| `useMounted` | [`src/hooks/use-mounted.ts`](src/hooks/use-mounted.ts) | SSR-safe mount flag |
| `useHover` | [`src/hooks/use-hover.ts`](src/hooks/use-hover.ts) | Hover state via ref |
| `useFocus` | [`src/hooks/use-focus.ts`](src/hooks/use-focus.ts) | Focus state via ref |

---

## Redux Store

| Slice | Location | Shape |
|---|---|---|
| `articles` | [`src/store/Article/Article.store.tsx`](src/store/Article/Article.store.tsx) | `{ loading, error, articles, categories: { selected, active }, query }` |

Typed dispatch / selector hooks live in [`src/store/AppStore.tsx`](src/store/AppStore.tsx):

```ts
import { useAppDispatch, useAppSelector } from '@/store/AppStore';
```

Async data is fetched via `createAsyncThunk` (see [`Article.api.ts`](src/store/Article/Article.api.ts)). Selectors live alongside the slice via `createSelector`.

> [!IMPORTANT]
> Redux is for cross-component UI state (filters, search query, active categories). For server-fetched article data already provided by an `async` server component, **do not duplicate into Redux** — pass props down.

---

## Data Layer (MongoDB)

| Helper | Location | Purpose |
|---|---|---|
| `dbConnect` | `src/lib/mongodb/dbConnect.js` | Establishes the Mongo client (envs: `DB_URL`, `DB_NAME`, `DB_USER_VIEWER_*`, `DB_USER_EDITOR_*`) |
| `ArticleGet` | `src/lib/mongodb/article-get.tsx` | Fetch a single article by `url` |
| `ArticleList` | `src/lib/mongodb/article-list.tsx` | List all articles |
| `create-article` | `src/lib/mongodb/create-article.tsx` | Insert an article (editor user) |
| `UserGet` / `UserPost` | `src/lib/mongodb/UserGet.tsx`, `UserPost.tsx` | User helpers (currently commented out) |

Currently `src/services/posts.ts` returns from the in-repo static `ArticleList` — Mongo is wired but not the source of truth. Treat the Mongo layer as the eventual replacement path; when you switch over, wire reads through `services/posts.ts` so callers don't change.

---

## Image Handling

- Always use `next/image` (`<Image />`); never raw `<img>`.
- `images: { unoptimized: true }` is set in `next.config.mjs` (Vercel + static export friendly). Don't rely on Next's optimizer.
- Public assets live under `public/static/`. Reference via absolute paths: `/static/images/Foo.jpg`.
- For above-the-fold images, pass `priority` to `<Image>` and use the blur placeholder pattern (`src/utils/getBlurImage.ts`) when feasible.

---

## Internationalization

The site is **Slovak-only** today. There is **no `i18next` setup**. User-facing strings live inline in components. If multi-language is added later, add a rule file and re-evaluate the affected skills.

---

## Environment

| Variable | Used by |
|---|---|
| `NEXT_PUBLIC_BASE_URL` | Metadata canonical URLs, OG image URLs |
| `NODE_ENV` | Standard Next.js gating |
| `DB_URL`, `DB_NAME`, `DB_USER_VIEWER_*`, `DB_USER_EDITOR_*` | `src/lib/mongodb/dbConnect.js` |
| `ADMIN_PASSWORD` | Admin CMS login (`src/app/(admin)/admin/login/actions.ts`) |
| `SESSION_SECRET` | HMAC key for admin session cookie — must be ≥32 chars (`src/lib/auth/session.ts`) |
| `NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN`, `NEXT_PUBLIC_INSTAGRAM_APP_SECRET` | `InstagramGrid` |
| `NEXT_PUBLIC_GA_ID`, `NEXT_PUBLIC_FB_APP_ID` | Analytics / social |
| `NEXT_PUBLIC_GOOGLE_MAP_API_KEY`, `NEXT_PUBLIC_GOOGLE_MAP_ID` | Map embeds (if used) |
| `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET` | OAuth (planned, dormant) |

`.env.example` is the canonical template; `.env.local` is gitignored.

---

## Common Operations

```bash
npm run dev       # next dev (Turbopack) — assume already running
npm run build     # next build
npm run start     # next start (production server locally)
npm run lint      # next lint (ESLint)
npm run ts        # tsc --noEmit
npm run inspect   # lint + ts
npm run format    # prettier --write src/
```

Vercel auto-deploys `main`. There is no separate staging env.

---

## Gotchas & Pitfalls

| Issue | Solution |
|---|---|
| Hydration mismatch on theme | Always pair `next-themes` reads with `useMounted` to avoid SSR/CSR divergence. The root `<html suppressHydrationWarning>` mutes the warning but does NOT fix bad logic. |
| Adding `'use client'` reflexively | Server components are the default for a reason (smaller JS, better TTFB). Only add `'use client'` for files that genuinely need hooks, Redux, browser APIs, or event handlers. Push the boundary AS DEEP AS POSSIBLE — let parents stay server. |
| Raw `<img>` instead of `<Image>` | Use `next/image`. Set `fill` + `objectFit` via inline `style` for cover patterns, or width/height for fixed sizes. |
| Hardcoded font sizes / colors outside Tailwind tokens | Use Tailwind utilities and the project tokens (`customGray.*`, `dividerShadow.*`). Don't sprinkle hex codes inline. |
| Shadow Redux state for fetched data | If a server component already fetched it, pass it via props. Don't `dispatch` to mirror it client-side. |
| React Compiler + manual memoization | React Compiler auto-memoizes. Stop adding `useMemo` / `useCallback` / `React.memo` unless profiling shows a real win. They are not "free safety." |
| `next/font` re-instantiation | Load fonts ONCE in the root `layout.tsx`. Don't import `Nunito({...})` in child components. |
| Image paths broken in production | `images.unoptimized = true` — paths under `public/` work, but external/remote URLs need to be self-hosted or proxied. |
| `Article.content` is loose-typed (`any`) at the renderer site | The CMS block type is `ArticleComponent` (see `src/store/Article/Article.types.ts`). When tightening, change the renderer signature too. |
| Mongo helpers currently dormant | `src/services/posts.ts` reads from `src/data/article-list.ts`. Don't assume changes to Mongo helpers reach the UI yet. |
| `services/posts.ts` memoizes articles in a module-level promise | After any write (`createArticle`), call `invalidateArticlesCache()` — `revalidatePath` only clears Next's route cache, not this in-memory memo, so reads would otherwise stay stale. `saveArticleAction` already does this. |
| Article create vs edit go through the same `ArticleEditor` | `mode="create"` renders a blank `emptyArticle()`; the form posts `slug` (editable) + `originalSlug` (hidden). `saveArticleAction` treats empty `originalSlug` as create, validates slug format/uniqueness, and redirects to `/admin/articles/<slug>` on create or rename. |
| `pages/api/revalidate.ts` is the only Pages-Router file | When adding new API endpoints, prefer App Router route handlers (`src/app/<route>/route.ts`). Don't add to `src/pages/api/`. |
| Rate limiter is in-memory (per-instance) | `src/lib/rate-limit` counters live in module memory, so on Vercel each serverless instance counts independently — a strong accidental-runaway guard (retry loops, bulk uploads, brute-force bursts) protecting R2 Class-A ops + Vercel invocations, NOT a hard global cap. Guards `/api/upload`, `/api/assets` (GET+DELETE) and the login action. `consume()` is storage-agnostic, so swap to Mongo/Upstash for a true global cap without touching call sites. Limits live in `RATE_LIMITS`. |

---

## Skills

> [!CAUTION]
> **Before implementing a non-trivial feature, invoke the relevant skill via the `Skill` tool.**

| Skill | Trigger | Description |
|---|---|---|
| `add-feature` | new feature, new page, end-to-end | Orchestrates page → data → components → UX |
| `create-page` | new page, new route | App Router page (server / client decision, metadata, layout) |
| `create-component` | new component | Functional component + props + Tailwind + `next/image` |
| `state-management` | useState, Redux, server data | Decision matrix: server-component props vs Redux vs local state |
| `data-layer` | Mongo, services, fetch | `src/services/` + `src/lib/mongodb/` flow |
| `style-guide` | styling, CSS, Tailwind | Tailwind first, inline second, no global CSS by reflex |
| `accessibility` | a11y, keyboard, ARIA | Semantic HTML + alt text + focus management |
| `implement-ux` | loading, empty, error | Loading / empty / error states for Server + Client components |
| `maintain-project` | scripts, debugging | Common scripts + log locations + how to debug |

Skills live under `.agent/skills/<name>/SKILL.md`.

---

## Rules

| Rule | Topic |
|---|---|
| [`conventions.md`](.agent/rules/conventions.md) | File naming, props, hooks, TypeScript |
| [`imports.md`](.agent/rules/imports.md) | Import order (matches `.prettierrc`), `@/` alias, no barrel exports |
| [`nextjs-patterns.md`](.agent/rules/nextjs-patterns.md) | Server vs Client components, App Router, metadata, ISR |

---

## Workflows

| Workflow | Purpose |
|---|---|
| [`pre-commit-checks.md`](.agent/workflows/pre-commit-checks.md) | `npm run inspect` gate before pushing |

---

## Agents

| Agent | Role |
|---|---|
| `sr-frontend-developer` | Implements pages / components / hooks / state / data flow |
| `frontend-code-reviewer` | Reviews changes before commit; finds issues, doesn't fix |

See [`.claude/agents/`](.claude/agents/).

---

## Commands

| Command | Purpose |
|---|---|
| `/commit` | Inspect working tree, draft a Conventional Commit message, commit locally |

See [`.claude/commands/`](.claude/commands/).

---

## Conventions

1. **Commit style**: Conventional Commits (`type(scope): subject`), lowercase, no trailing period, short subject.
2. **Pre-commit**: Run `npm run inspect` (lint + typecheck) before committing.
3. **No `git push` by agents** — pushing is always manual (Vercel deploys on push, so the blast radius is production).
4. **No `--no-verify`, no `--amend`** — fix the underlying issue and create a new commit.
5. **Dev servers are already running** — don't `npm run dev` from an agent.
6. **No type casting `as unknown as T`** — fix the upstream type instead.
7. **Slovak content** — copy stays Slovak unless explicitly asked to translate; code identifiers stay English.
