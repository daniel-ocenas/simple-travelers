# Next.js Patterns

This project uses the App Router (`src/app/`). One legacy Pages-Router file (`src/pages/api/revalidate.ts`) remains; new API code goes to the App Router.

## Server vs Client Components

**Default to server components.** They run once at SSR, ship zero JS to the client, and can `await` data directly.

Add `'use client'` ONLY when the file needs at least one of:

| Need | Example |
|---|---|
| React state hooks | `useState`, `useReducer` |
| Effects | `useEffect`, `useLayoutEffect` |
| Refs | `useRef` with imperative DOM access |
| Browser APIs | `window`, `document`, `localStorage`, `IntersectionObserver` |
| Redux | `useAppSelector`, `useAppDispatch`, `useDispatch` |
| Theme | `next-themes` (`useTheme`) |
| Event handlers on JSX | `onClick`, `onSubmit`, `onChange` |
| Client-only third-party libs | charts, drag-and-drop, maps |

### Push the boundary deep

A page (`page.tsx`) can stay a server component even if some children are client components. The boundary should be at the smallest leaf that needs it.

```tsx
// src/app/blog/page.tsx — server component (no 'use client')
export default async function BlogPage() {
  const posts = await getAllPosts();
  return <PostsGrid posts={posts} />;   // pass data as props
}
```

```tsx
// src/components/posts/posts-grid.tsx — can be server too
export default function PostsGrid({ posts }: { posts: Article[] }) {
  return <div className='grid grid-cols-3 gap-4'>{posts.map(p => <Card key={p.url} post={p} />)}</div>;
}
```

```tsx
// src/components/posts/card.tsx — 'use client' because of hover state, etc.
'use client';
import { useHover } from '@/hooks/use-hover';
```

Anti-pattern: marking `BlogPage` as `'use client'` to pass props to a single client child. The data fetch will then run on the client (slower, no SEO).

## Data Fetching

| Where | How |
|---|---|
| Server component | `async function Page() { const data = await getX(); }` — no extra plumbing |
| Server component (cached) | Wrap the fetcher in React's `cache()` when the same call is made by multiple components in one render |
| Client component | Prefer to receive data as props from a server parent. If truly client-side, fetch in `useEffect` or via Redux thunks. No React Query in this project. |

`src/services/posts.ts` is the abstraction layer. Pages don't import from `src/lib/mongodb/` or `src/data/` directly — they call `services/posts.ts`. Keep it that way so swapping static → Mongo is a one-file change.

## Metadata

Every page-level file should export either:

```ts
export const metadata: Metadata = { title: 'Blog' };
```

or for dynamic routes:

```ts
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = await getPost(slug);
  if (!article) return notFound();
  return { title: article.title, description: article.description, openGraph: { ... } };
}
```

The root `metadata` in `src/app/layout.tsx` provides defaults + the `title.template`. Page-level `metadata` overrides.

> [!IMPORTANT]
> In Next.js 15+/16 App Router, `params` and `searchParams` are **Promises**. Always `await` them:
>
> ```ts
> type Params = Promise<{ slug: string }>;
> const { slug } = await params;
> ```

## Static / Dynamic / ISR

- Static (default) — pages without `cookies()` / `headers()` / dynamic functions are pre-rendered at build.
- Dynamic — opt in with `export const dynamic = 'force-dynamic'` or by using `cookies()`/`headers()`.
- ISR — pages with `export const revalidate = N` re-render at most every N seconds. The legacy `src/pages/api/revalidate.ts` is the on-demand trigger.

When adding a route, default to static. Only opt out when there's a concrete reason (user-specific content, fast-moving data).

## `generateStaticParams`

For dynamic routes (`[slug]`, `[id]`), provide `generateStaticParams` so the route pre-renders the known set at build:

```ts
export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map(p => ({ slug: p.url }));
}
```

Otherwise the route is dynamic by default and re-fetches on every request.

## Route Handlers (App Router APIs)

New API endpoints go under `src/app/<route>/route.ts`:

```ts
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  return NextResponse.json({ ok: true });
}

export async function POST(req: Request) {
  const body = await req.json();
  return NextResponse.json({ ok: true, body });
}
```

Don't add to `src/pages/api/` — that's legacy and only kept for the existing `revalidate.ts`.

## `notFound()` and `not-found.tsx`

- Throwing `notFound()` from a server component renders the closest `not-found.tsx`.
- Each route folder can have its own `not-found.tsx` (e.g. `src/app/blog/[slug]/not-found.tsx`).
- For `generateMetadata`, calling `notFound()` is fine — it short-circuits.

## Image Configuration

- `next.config.mjs` sets `images: { unoptimized: true }`. The Next image optimizer is OFF.
- Still use `<Image>` (not `<img>`) — it gives you the right HTML attributes, lazy-loading, and a future migration path back to the optimizer.
- For above-the-fold hero images, pass `priority`.
- Use `fill` + a sized parent for responsive cover patterns; provide `sizes` so the browser picks the right intrinsic.

## Fonts

`next/font/google` is loaded ONCE in `src/app/layout.tsx`:

```ts
const nunito = Nunito({ subsets: ['latin'], display: 'swap', variable: '--font-nunito' });
```

Then applied via a CSS variable. Don't import `Nunito({...})` inside child components — it instantiates a new loader.

## Theming

`next-themes` is wired in `src/components/providers/provider.tsx` with `attribute='class'` and `defaultTheme='system'`. Tailwind reads via `darkMode: 'class'`.

Hydration gotcha: components that branch on the resolved theme must guard with a mount flag (`useMounted`) or `suppressHydrationWarning`, otherwise SSR (no theme) and CSR (resolved theme) diverge.

## Common Mistakes

| Thought | Reality |
|---|---|
| "I'll add `'use client'` to the page so I can use a hook in one child" | Add it to the child instead. Keep the page server. |
| "I'll fetch in `useEffect` because that's what I know" | Server components can `await` directly. Skip the round-trip. |
| "I'll add to `src/pages/api/`, that file is already there" | App Router route handlers are the new pattern. Add under `src/app/<route>/route.ts`. |
| "`params.slug` should work directly" | In Next.js 15+/16 it's a Promise — `await params` first. |
| "I'll use `next/router`" | App Router is `next/navigation`. `next/router` only works in the Pages directory. |
| "I'll throw a regular Error to show a 404" | Call `notFound()` from `next/navigation`. It renders `not-found.tsx`. |
