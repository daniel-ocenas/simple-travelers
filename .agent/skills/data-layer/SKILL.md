---
name: data-layer
description: Use when adding a new data source — services layer, MongoDB helper, static data, Next.js cache semantics
---

# data-layer

Add or modify how the app reads / writes domain data. Currently dormant Mongo + active static data — both go through `src/services/`.

## When to Use

- Adding a new domain entity (e.g. "trips", "comments") with its own read / write
- Switching a route from static seed to Mongo (or vice versa)
- Adding caching / revalidation semantics

## When NOT to Use

- A one-off page that reads a JSON file — inline `import data from '@/data/foo.ts'` is fine.
- A pure utility (string formatting, date parsing) — that's `src/utils/`.

## The Layers

```
src/app/<route>/page.tsx          ← consumer (server component)
   │
   ▼
src/services/<entity>.ts          ← service layer — public API to pages
   │
   ▼
src/lib/mongodb/<helper>.tsx      ← Mongo helper (optional)
src/data/<entity>-list.ts         ← static seed (optional)
```

**Rule:** Pages depend on `src/services/`. Services choose between Mongo and static. When you switch sources, only the service file changes — pages keep working.

## The Pattern

### 1. Service file

```ts
// src/services/<entity>.ts
import { MyEntityList } from '@/data/my-entity-list';
// import MyEntityGet from '@/lib/mongodb/my-entity-get';
import type { MyEntity } from '@/store/MyEntity/MyEntity.types';

export async function getAllMyEntities(): Promise<MyEntity[]> {
  // Static path (today)
  return MyEntityList;

  // Mongo path (eventual)
  // const { entities } = await MyEntityList();
  // return entities;
}

export async function getMyEntity(slug: string): Promise<MyEntity | undefined> {
  return MyEntityList.find((e) => e.slug === slug);
}
```

Service functions are `async` even when synchronous today — keeps the call sites stable for the eventual Mongo swap.

### 2. Types

Types live under `src/store/<Domain>/<Domain>.types.ts` — colocated with the slice if there is one, alongside the data if not.

```ts
// src/store/MyEntity/MyEntity.types.ts
export type MyEntity = {
  _id: string;
  slug: string;
  title: string;
  // …
};
```

### 3. Mongo helper (when adding a Mongo-backed source)

Existing helpers in `src/lib/mongodb/` follow this shape:

```ts
import { dbConnect } from './dbConnect';

export default async function MyEntityList() {
  const { db } = await dbConnect();
  try {
    const items = await db.collection('myEntities').find().toArray();
    return { items, status: 200 };
  } catch (e) {
    console.error(e);
    return { items: [], status: 500, errorMap: e };
  }
}
```

Notes:
- Returns a `{ data, status }` object — does NOT throw for expected failures.
- Logs to stdout (`console.error`) — Vercel captures.
- Uses `dbConnect.js` (singleton client). Don't create a new MongoClient.

### 4. Static seed (when adding static data)

```ts
// src/data/my-entity-list.ts
import type { MyEntity } from '@/store/MyEntity/MyEntity.types';

export const MyEntityList: MyEntity[] = [
  { _id: '1', slug: 'foo', title: 'Foo' },
  // …
];
```

Static data is fine for small, slow-changing sets (e.g. featured trips, gallery sections).

### 5. Cache semantics

For server-component fetchers called by multiple parts of the same render, wrap in `cache()`:

```ts
import { cache } from 'react';

export const getAllPosts = cache(async () => { /* … */ });
```

For revalidation:

- Build-time only: default. Re-runs on next deploy.
- Periodic ISR: `export const revalidate = 3600` in the consuming `page.tsx`.
- On-demand: hit `/api/revalidate?path=/blog` (legacy route at `src/pages/api/revalidate.ts`).

> [!IMPORTANT]
> Whoever calls `/api/revalidate` needs to know the canonical path. Document the trigger in the CMS / admin tooling once it exists.

### 6. Environment variables

If the new source needs envs, add them to:

- `.env.example` — with empty value as documentation
- `CLAUDE.md` Environment table — what the var is for

Never commit `.env.local`.

### 7. Update `CLAUDE.md`

Update "Data Layer (MongoDB)" or "Project Structure" if the new source warrants a row.

## Common Mistakes

| Thought | Reality |
|---|---|
| "I'll fetch directly from the page" | Go through `src/services/`. When Mongo turns on, you'll touch one file instead of N. |
| "I'll throw on Mongo failure" | The existing helpers return `{ status: 500 }`. Match the pattern so callers handle uniformly. |
| "I'll instantiate a new MongoClient" | Use `dbConnect`. Multiple clients leak connections. |
| "I'll cache results in a module-level variable" | Use React's `cache()` (per-request) or ISR (`revalidate`). Module-level state in Next.js is shared across requests in dev but flushed between builds. |
| "Mongo helpers can return the raw BSON document" | Map at the boundary into the domain type defined in `src/store/<Domain>/`. Raw `_id: ObjectId` doesn't serialize cleanly across the server/client boundary. |

## Red Flags — STOP

- A page importing from `src/lib/mongodb/` directly → push through `src/services/`.
- A new MongoClient — use `dbConnect`.
- `throw` in a Mongo helper for expected failures (missing doc) — return `{ status: 404 }` instead.
- Returning a Mongo `ObjectId` to a client component — convert to string at the service boundary.

## See Also

- `[[add-feature]]` — orchestrator
- `[[create-page]]` — consumer side
- `[[../../rules/nextjs-patterns]]` — ISR + cache semantics
