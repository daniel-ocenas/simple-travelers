---
name: implement-ux
description: Use when wiring loading / empty / error states — Next.js loading.tsx + error.tsx, Suspense, empty states with CTAs
---

# implement-ux

Build the four states every interactive screen has: **loading**, **empty**, **error**, **success**. Skip none of them.

## When to Use

- Any data-driven UI
- Any client-side mutation (form submit, search, filter that triggers a fetch)
- Reviewing UI that feels "incomplete" — usually one of these states is missing

## When NOT to Use

- Purely static content (legal text, About page) — only the error state might apply (and Next handles it via `error.tsx`).

## The Four States in Next.js

Next.js gives you per-route conventions:

| File | Purpose |
|---|---|
| `src/app/<route>/loading.tsx` | Shown while server components are awaiting data (Suspense fallback) |
| `src/app/<route>/error.tsx` | Shown when a server component throws (client component, gets `reset` fn) |
| `src/app/<route>/not-found.tsx` | Shown when `notFound()` is called |
| `src/app/global-error.tsx` | App-shell error boundary (already exists at `src/app/error.tsx`) |

### 1. Loading — server-component flavor

For server-component data fetching, add a sibling `loading.tsx`:

```tsx
// src/app/<route>/loading.tsx
export default function Loading() {
  return (
    <div className='space-y-4'>
      <div className='h-8 w-64 animate-pulse rounded bg-gray-200 dark:bg-customGray-light' />
      <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
        {[0, 1, 2].map((i) => (
          <div key={i} className='h-60 animate-pulse rounded-xl bg-gray-200 dark:bg-customGray-light' />
        ))}
      </div>
    </div>
  );
}
```

Next.js automatically wraps the route in `<Suspense>` and renders this until the page's `await` resolves.

### 2. Loading — client-component flavor

For client-only async (rare here — Redux thunk, fetch in `useEffect`), gate UI on `loading` from state:

```tsx
'use client';
if (loading) return <Skeleton />;
```

For Redux: read `loading` from the slice (`articles.loading` is the existing pattern in `src/store/Article/Article.store.tsx`).

### 3. Empty

When data loads but is empty:

```tsx
{posts.length === 0 ? (
  <div className='py-12 text-center'>
    <h2 className='mb-2 text-xl font-semibold'>Žiadne články</h2>
    <p className='text-secondary mb-4'>Zatiaľ tu nič nie je. Skúste neskôr.</p>
    {/* optional CTA: Link to a featured section */}
  </div>
) : (
  <PostsGrid posts={posts} />
)}
```

Distinguish "nothing here yet" (cold start) from "no results match your filter" (the user filtered too aggressively — suggest clearing).

### 4. Error — server-component flavor

Add a sibling `error.tsx` (must be a client component):

```tsx
// src/app/<route>/error.tsx
'use client';

import { useEffect } from 'react';

export default function ErrorBoundary({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className='py-12 text-center'>
      <h2 className='mb-2 text-2xl font-bold'>Niečo sa pokazilo</h2>
      <p className='text-secondary mb-4'>Skúste to znova.</p>
      <button onClick={reset} className='rounded bg-customGray-light px-4 py-2 text-white'>
        Skúsiť znova
      </button>
    </div>
  );
}
```

The root `src/app/error.tsx` already provides an app-level boundary. Per-route `error.tsx` overrides it for that route.

### 5. Not Found

`notFound()` renders the closest `not-found.tsx`. Existing file: `src/app/blog/[slug]/not-found.tsx`. Add per-route variants when the messaging differs.

### 6. Success

Most success states are implicit — data renders, the user sees it. For mutations:

- Form submit: navigate away, or render a confirmation block in place of the form.
- Filter applied: the result list updates (no toast needed).

This site does not currently use a toast system. If/when one is added, document it in `CLAUDE.md`.

## Skeleton vs Spinner

| Use skeleton when | Use spinner when |
|---|---|
| Layout will look the same once loaded | Layout depends on data (heavy branching) |
| > 200ms expected loading time | < 200ms (spinner barely flashes) |
| Inline / partial loading | Full-screen / blocking |

For Next.js server-component routes, prefer skeletons (`loading.tsx`) — they preserve layout and don't flicker.

## Image Loading Polish

For above-the-fold images, pass `priority` to `next/image`. For below-the-fold, default lazy is fine.

For blur placeholders, the `plaiceholder` integration is available — see `src/utils/getBlurImage.ts`. Skip the integration for hot paths if it adds latency.

## Common Mistakes

| Thought | Reality |
|---|---|
| "I'll skip the loading state — it's fast" | Vercel cold starts + 3G mobile users will see the gap. Add the skeleton. |
| "Empty state can just say 'No data'" | Tell the user WHY there's nothing and offer a next step. |
| "I'll throw an Error to show a 404" | Call `notFound()` from `next/navigation`. |
| "I'll add a Retry button for QA later" | Errors happen in production. Build the retry now. `error.tsx` already gets `reset()`. |
| "I'll wrap the whole page in `<Suspense>`" | Next.js wraps the route in Suspense automatically when `loading.tsx` exists. Per-section Suspense (with `<Suspense fallback={...}>`) is for streaming partial UI. |

## Red Flags — STOP

- A new route fetching data with no `loading.tsx` → add one.
- An empty list rendering a blank container → add an empty-state block.
- A server component that may throw with no `error.tsx` sibling → add one (or rely on the root `src/app/error.tsx`).
- A client component that fetches but exposes no `error` state → expose one and render it.

## See Also

- `[[create-page]]` — `loading.tsx` / `error.tsx` / `not-found.tsx` siblings
- `[[state-management]]` — Redux thunks carry `loading` / `error`
- `[[accessibility]]` — loading regions should set `aria-busy`; error messages should announce via `aria-live`
- `[[style-guide]]` — skeleton color via project tokens
