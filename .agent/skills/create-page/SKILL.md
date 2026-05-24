---
name: create-page
description: Use when creating a new App Router page — file location, server vs client decision, metadata, generateStaticParams, notFound wiring
---

# create-page

Add a new top-level page (route) under `src/app/`.

## When to Use

- A new route in the URL bar (`/trips`, `/gallery/[id]`)
- A new tab on an existing section

## When NOT to Use

- A modal — not a route, build a client component.
- A reused section across pages — that's `[[create-component]]`.
- A small addition to an existing page — edit it directly.

## The Pattern

### 1. Folder

App Router uses folders as URL segments:

```
src/app/<feature>/page.tsx              ← /<feature>
src/app/<feature>/[id]/page.tsx         ← /<feature>/:id (dynamic)
src/app/<feature>/not-found.tsx         ← per-route 404
src/app/<feature>/loading.tsx           ← per-route Suspense fallback (optional)
```

Page-scoped sub-components live alongside, NOT under `src/components/`:

```
src/app/<feature>/_components/<sub>.tsx     (underscore prefix = not a route segment)
```

Shared components still go under `src/components/`.

### 2. Server-component skeleton (default)

```tsx
import { Metadata } from 'next';

import SomeSection from '@/components/<feature>/some-section';
import { getFeatureData } from '@/services/<feature>';

export const metadata: Metadata = {
  title: 'Page Title',
  description: 'Short description for OG + search engines',
};

export default async function FeaturePage() {
  const data = await getFeatureData();

  return (
    <>
      <h1 className='my-12 text-center text-3xl font-bold'>Page Title</h1>
      <SomeSection data={data} />
    </>
  );
}
```

**Rules:**
- No `'use client'` directive. Defaults to server component.
- `async` is fine — `await` data directly.
- Wrap the outer JSX with `<>` (no extra wrapper `<div>` unless needed for layout).
- Use shared layout components only when they exist; otherwise plain Tailwind.

### 3. Dynamic-segment skeleton

```tsx
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { getPost, getAllPosts } from '@/services/posts';

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return notFound();
  return {
    title: post.title,
    description: post.description,
    openGraph: { title: post.title, description: post.description, images: [post.image] },
  };
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((p) => ({ slug: p.url }));
}

export default async function PostPage({ params }: { params: Params }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return notFound();

  return <article>{/* … */}</article>;
}
```

> [!IMPORTANT]
> `params` is a **Promise** in Next.js 15+/16. Always `await` it. Type as `Promise<{ slug: string }>`.

### 4. Client-component variant (only if needed)

```tsx
'use client';

import { useState } from 'react';

export default function InteractivePage() {
  const [count, setCount] = useState(0);
  // …
}
```

Add `'use client'` ONLY when the page itself uses hooks / browser APIs / event handlers. If it's just rendering a client child, the page can stay server — push `'use client'` into the child.

### 5. Update `CLAUDE.md`

Add a row to the "Pages & Routes" table:

| Route | File | Type | Description |
|---|---|---|---|
| `/<route>` | `src/app/<route>/page.tsx` | Server | Short description |

### 6. Header nav

If the page should appear in the main navigation, add it to `NAV_ITEMS` in [`src/components/header/header.tsx`](src/components/header/header.tsx):

```ts
{ title: 'New Page', path: '/new-page', header: true },
```

Use `header: false` if the route exists but should NOT show in the nav (e.g. `/gdpr`).

## Common Mistakes

| Thought | Reality |
|---|---|
| "I'll put the page under `src/pages/`" | That's legacy Pages Router. Use `src/app/<route>/page.tsx`. |
| "I'll read `params.slug` directly" | `params` is a Promise — `await params` first. |
| "I'll throw `new Error('404')`" | Call `notFound()` from `next/navigation`. Renders `not-found.tsx`. |
| "I'll mark the page `'use client'` because I want to use `useTheme`" | Use `useTheme` in the child that needs it. Page stays server. |
| "I'll fetch in `useEffect`" | Server component + `await` is shorter and pre-rendered. |
| "I'll skip `generateStaticParams` — it'll be slow first request only" | Without it the route is dynamic by default. For a known slug set, generating params at build is free SEO + speed. |

## Red Flags — STOP

- Adding to `src/pages/` → use `src/app/`.
- Using `next/router` → use `next/navigation` (`useRouter`, `usePathname`, `notFound`, `redirect`).
- `'use client'` on a file that has no hooks / events / browser APIs.
- A raw `<a href>` for an internal link → use `next/link`.
- A raw `<img>` → use `next/image`.

## See Also

- `[[add-feature]]` — orchestrator
- `[[create-component]]` — sub-components
- `[[data-layer]]` — service + Mongo wiring
- `[[../../rules/nextjs-patterns]]` — server/client, metadata, ISR
