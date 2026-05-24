---
name: state-management
description: Use when picking where state lives — server-component props, Redux Toolkit, local useState, URL — never mix the three for the same data
---

# state-management

Decide where each kind of state lives. This project uses **Redux Toolkit** for cross-component client UI state (filters, search query). Server-fetched data is **NOT** in Redux — it's passed as props from server components.

## When to Use

- Building a new feature that has any kind of state
- Refactoring a component that's grown `useState` + `useEffect` + ad-hoc fetches
- Adding a filter / search input that other components need to read

## When NOT to Use

- Pure presentational components with no state.
- Cross-tab persistence (`localStorage`) — that's a small custom hook, not Redux.

## The Decision Matrix

| State type | Where | How |
|---|---|---|
| Server-fetched data (articles, gallery items) | Props from server component | `async function Page() { const x = await getX(); return <Child x={x} />; }` |
| Cross-component UI state (selected categories, search query) | Redux Toolkit slice under `src/store/<Domain>/` | `useAppSelector` + `useAppDispatch` |
| Local UI state (toggle, hover, menu-open) | `useState` in a client component | inline |
| URL state (current slug, query string) | `useSearchParams` / `useParams` from `next/navigation` | inline |
| Theme | `next-themes` (`useTheme`) | inline |
| Pure derived from inputs | Compute in render — React Compiler memoizes | no hook |

**Rule: never mix.** Data lives in ONE place. Don't `dispatch(setArticles(props.articles))` to mirror props in Redux; don't `useState(reduxValue)` to shadow a slice.

## The Patterns

### 1. Server data passed via props

```tsx
// src/app/blog/page.tsx — server
export default async function BlogPage() {
  const posts = await getAllPosts();
  return <PostsGrid posts={posts} />;
}
```

No client state. No Redux. The data is rendered once at SSR and cached at the edge.

### 2. Redux slice — for cross-component client state

Follow the existing shape in `src/store/Article/Article.store.tsx`:

```ts
import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '@/store/AppStore';
import type { CategoriesState, MyState } from './My.types';

const initialState: MyState = { /* … */ };

const mySlice = createSlice({
  name: 'my',
  initialState,
  reducers: {
    setSelected: (state, action: PayloadAction<string[]>) => {
      state.selected = action.payload;
    },
  },
});

export const { setSelected } = mySlice.actions;
export default mySlice.reducer;

// Selectors
export const getSelected = createSelector(
  (s: RootState) => s.my.selected,
  (selected) => selected,
);
```

Register the reducer in [`src/store/AppStore.tsx`](src/store/AppStore.tsx):

```ts
reducer: {
  articles: articleReducer,
  my: myReducer,
}
```

### 3. Read / write Redux from a client component

```tsx
'use client';

import { useAppDispatch, useAppSelector } from '@/store/AppStore';
import { getSelected, setSelected } from '@/store/My/My.store';

export default function MyFilter() {
  const selected = useAppSelector(getSelected);
  const dispatch = useAppDispatch();
  return (
    <button onClick={() => dispatch(setSelected([...selected, 'x']))}>
      Toggle
    </button>
  );
}
```

### 4. Local state — `useState` in a client component

```tsx
'use client';
const [open, setOpen] = useState(false);
```

Don't lift to Redux unless another component needs to read it.

### 5. URL state

```tsx
'use client';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';

const params = useSearchParams();
const router = useRouter();
const pathname = usePathname();

const tab = params.get('tab') ?? 'all';
const setTab = (v: string) => {
  const next = new URLSearchParams(params);
  next.set('tab', v);
  router.push(`${pathname}?${next}`);
};
```

URL state survives reloads and is shareable — prefer it over Redux for things like "currently selected tab" or "search query you want to bookmark."

## Common Mistakes

| Thought | Reality |
|---|---|
| "I'll put the article list in Redux" | The list comes from a server component as props. Putting it in Redux means re-fetching client-side or losing SSR benefits. |
| "I'll mirror props in `useState` so I can pass them around" | Just pass the prop further down. Mirroring creates two sources of truth. |
| "I'll add `useEffect(() => fetch(...))`" | Fetch in a server component and pass via props. Or in a Redux thunk if it's genuinely client-only. |
| "I'll `dispatch(setX(serverData))` on mount" | Same problem — duplicates the data. Pass via props. |
| "I'll add a Redux slice for this modal-open toggle" | `useState` is enough. Only reach for Redux when multiple unrelated components need to read the same value. |
| "I'll use `useState` for the search query so it's fast" | If two components need it (filter + result list), it goes in Redux or URL state. |

## Red Flags — STOP

- `useEffect(() => { setX(props.data) }, [props.data])` → shadowing a prop. Read the prop directly.
- A new Redux slice that mirrors a server-component fetch → delete the slice, pass props.
- `useState` holding what's also in Redux → pick one.
- Adding `useEffect` to fetch data the server could fetch → move to a server component.

## See Also

- `[[create-page]]` — server-component fetching
- `[[create-component]]` — server vs client decision
- `[[data-layer]]` — `src/services/` + Mongo
- `[[../../rules/nextjs-patterns]]`
