---
name: add-feature
description: Use when adding a new end-to-end feature (page + data + components + state) — orchestrates the sub-skills in order
---

# add-feature

Top-level orchestrator for delivering one new feature end-to-end in this Next.js app.

## When to Use

- A new route appearing in the URL bar (e.g. `/trips`, `/gallery/[id]`)
- A new major section on an existing page (its own data, its own components)
- Any change where you'd otherwise be tempted to skip a layer (e.g. fetch in `useEffect` instead of in a server component)

## When NOT to Use

- Tiny additions to an existing page (one new line of copy, one new image) — edit directly.
- Visual-only tweaks (spacing, color) — use Tailwind directly.
- Refactors with no user-visible behavior change — targeted edits.

## The Pattern

### Phase 1 — Plan

1. Read `CLAUDE.md` Pages & Routes / Shared Components / Custom Hooks — see what already exists.
2. Read the closest existing page as a structural template (e.g. `src/app/blog/page.tsx` for a list page).
3. Decide: **server component or client component?** Default server. See `[[../../rules/nextjs-patterns]]`.
4. Decide the data source: static (`src/data/`) or Mongo (`src/lib/mongodb/`). Go through `src/services/` either way.

### Phase 2 — Page

Run `[[create-page]]` — page file, `metadata`, `generateStaticParams` if dynamic, `notFound()` wiring.

### Phase 3 — Data Layer

Run `[[data-layer]]` if a new data source is needed. Otherwise call the existing `getAllPosts` / `getPost` (or sibling) in `src/services/`.

### Phase 4 — Components

Run `[[create-component]]` for each new UI piece. Reuse existing shared components (`Card`, `CategoryList`, `Article*`) where they fit.

### Phase 5 — State

Run `[[state-management]]` IF the feature has client-side state that crosses components. Most page additions on this site don't — they pass server-fetched data via props.

### Phase 6 — UX

Run `[[implement-ux]]` — empty state, error state, loading skeleton for any client-side fetch.

### Phase 7 — Style + A11y

Run `[[style-guide]]` for spacing / dark-mode / responsive. Run `[[accessibility]]` for keyboard / alt / heading hierarchy.

### Phase 8 — Documentation

Update `CLAUDE.md` — add the route to "Pages & Routes", new shared components to "Shared Components", new hooks to "Custom Hooks", new env vars to "Environment", any new footgun to "Gotchas & Pitfalls".

### Phase 9 — Verify

Run `npm run inspect` (lint + typecheck). Open the route in the browser at `http://localhost:3000/<route>` and walk through:
- Golden path
- Empty / error state
- Light AND dark mode
- Mobile + desktop widths
- Keyboard tab through any interactive elements

### Phase 10 — Commit

`/commit` with a Conventional Commit message. Vercel auto-deploys on push — the user pushes manually.

## Common Mistakes

| Thought | Reality |
|---|---|
| "I'll fetch in `useEffect` to keep it simple" | Server components can `await` directly — no loading flash, no SEO loss. |
| "I'll mark the page `'use client'` so I can use a hook in a deep child" | Push the boundary deep instead. Keep the page server. |
| "I'll skip dark mode for now" | This site has light/dark from `next-themes`. Test in both before shipping. |
| "I'll add a `useState` for the article list" | Server-fetched data goes through props. Don't shadow in Redux or `useState`. |
| "I'll add to `src/pages/api/`" | App Router route handlers (`src/app/.../route.ts`) are the new pattern. |

## Red Flags — STOP

- About to add `'use client'` to a page file → can you push it deeper instead?
- About to add `useEffect` for data fetching → can you fetch in a server component?
- About to hardcode a color hex → use a Tailwind token or extend the config.
- About to use `<img>` → use `next/image`.
- About to write `<a href="/foo">` for an internal link → use `next/link`.

## See Also

- `[[create-page]]`, `[[create-component]]`, `[[data-layer]]`
- `[[state-management]]`, `[[style-guide]]`, `[[accessibility]]`, `[[implement-ux]]`
- `[[../../rules/nextjs-patterns]]`
