---
name: create-component
description: Use when building a React component — props, server vs client, Tailwind styling, next/image, semantic HTML
---

# create-component

Build a reusable React component for this Next.js + Tailwind app.

## When to Use

- A piece of UI used in 2+ places
- A piece of UI complex enough to deserve its own file (state, branching, multiple sub-elements)
- A page-scoped sub-component that hides detail from the page file

## When NOT to Use

- One-off inline content — keep it inline.
- A new prop variant of an existing component — extend it; don't fork.

## The Pattern

### 1. Location

```
src/components/<feature>/<name>.tsx       ← shared, grouped by feature
src/components/<name>.tsx                 ← shared, ungrouped (rare)
src/app/<route>/_components/<name>.tsx    ← page-scoped (underscore prefix = not a route)
```

Use kebab-case filenames. Components are `PascalCase`.

### 2. Server vs Client decision

Default: server component (no directive). Add `'use client'` if the file uses:

- React hooks (`useState`, `useEffect`, `useRef`, ...)
- Event handlers (`onClick`, `onSubmit`, ...)
- Redux (`useAppSelector`, `useAppDispatch`)
- `next-themes` (`useTheme`)
- Browser APIs (`window`, `document`, ...)

If a component receives data and just renders it, it can be a server component.

### 3. Skeleton — server component

```tsx
import Image from 'next/image';
import Link from 'next/link';

import type { Article } from '@/store/Article/Article.types';

interface CardProps {
  post: Article;
  external?: boolean;
}

export default function Card({ post, external = false }: CardProps) {
  const { url, title, date, image, categories } = post;
  return (
    <Link href={external ? url : `/blog/${url}`} target={external ? '_blank' : undefined}>
      <div className='flex flex-col overflow-hidden rounded-xl shadow-xl transition hover:scale-[1.02]'>
        <div className='relative h-60'>
          <Image src={image} alt={title} fill style={{ objectFit: 'cover' }} />
        </div>
        <div className='p-4'>
          <h3 className='line-clamp-2 text-2xl font-bold'>{title}</h3>
          <time className='text-sm text-gray-600'>{date}</time>
        </div>
      </div>
    </Link>
  );
}
```

### 4. Skeleton — client component

```tsx
'use client';

import { useState } from 'react';

interface ToggleProps {
  label: string;
  initial?: boolean;
}

export default function Toggle({ label, initial = false }: ToggleProps) {
  const [on, setOn] = useState(initial);
  return (
    <button
      type='button'
      aria-pressed={on}
      onClick={() => setOn((v) => !v)}
      className='rounded border px-3 py-1'
    >
      {label}: {on ? 'On' : 'Off'}
    </button>
  );
}
```

### 5. Props

- Inline destructuring for one-off prop bags is fine; promote to a named `Props` interface when the type is reused, exported, or has ≥4 fields.
- Sensible defaults for optional props.
- DON'T spread `...props` onto a `<div>` to "pass through" — name the props you accept.
- DON'T add `React.memo` / `useMemo` / `useCallback` by reflex — React Compiler handles it. Only add manual memoization with a measured reason.

### 6. Styling

Tailwind utility classes first. See `[[style-guide]]`:

1. Utility classes (`className='flex items-center gap-2 p-3'`)
2. Inline `style` for one-off values (`style={{ width: progress + '%' }}`)
3. CSS in `src/styles/globals.css` only for global concerns (custom `.bg-glass`, `.scrollbar`)

Don't create new `.module.css` files by reflex.

### 7. Images

- Always `next/image`, never `<img>`.
- For cover patterns: `fill` + `style={{ objectFit: 'cover' }}` + a sized relative parent.
- For fixed sizes: pass `width` and `height`.
- For above-the-fold: pass `priority`.
- Provide an `alt` — descriptive, NOT just the filename. Empty `alt=''` for decorative images.

### 8. Links

- `next/link` for internal navigation.
- External links: `<Link href={url} target='_blank' rel='noopener noreferrer'>`.

### 9. Update `CLAUDE.md`

If the component is genuinely shared (used by 2+ pages), add it to the "Shared Components" table. Page-scoped components do NOT go there.

## Common Mistakes

| Thought | Reality |
|---|---|
| "I'll add `'use client'` just in case" | Server is the default for a reason. Smaller JS, better TTFB. Only opt in when needed. |
| "I'll wrap with `React.memo` for performance" | React Compiler memoizes. Adding `memo` manually is noise unless measured. |
| "I'll use `<img>` — it's just an image" | `next/image` for everything. |
| "I'll write a `.module.scss` for these three styles" | Use Tailwind. Custom modules are for animations / pseudo-elements only. |
| "I'll fork `Card` for the gallery variant" | Add a prop on `Card`. Forks drift. |
| "I'll use `<div onClick>` because the design is non-button-shaped" | `<button type='button' className='...'>` with no default styles works; `<div onClick>` breaks keyboard a11y. |
| "I'll hardcode a hex code in inline style" | Use a Tailwind utility or extend `tailwind.config.js` with the token. |

## Red Flags — STOP

- About to `'use client'` for a pure rendering component → revert.
- About to add `React.memo` → why? Measure first.
- About to use `<img>` → swap to `next/image`.
- About to use `<a href='/x'>` for internal link → swap to `next/link`.
- About to `<div onClick>` → use `<button type='button'>`.
- About to spread `...rest` onto a `<div>` → name props.

## See Also

- `[[create-page]]`, `[[state-management]]`
- `[[style-guide]]`, `[[accessibility]]`, `[[implement-ux]]`
- `[[../../rules/conventions]]`, `[[../../rules/nextjs-patterns]]`
