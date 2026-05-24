# Import Rules

## Path Aliases

- `@/` resolves to `./src/`. Use it for all non-relative imports inside this repo.
- Relative imports (`./`, `../`) only for files in the same feature folder.

```ts
// ✅
import { Article } from '@/store/Article/Article.types';
import { getAllPosts } from '@/services/posts';
import { useBreakpoint } from '@/hooks/use-breakpoint';
import NavLink from './nav-link';

// ❌ — deep relative imports across feature folders
import { Article } from '../../../store/Article/Article.types';
```

## Group & Order

This project uses `@trivago/prettier-plugin-sort-imports` with this configuration (from `.prettierrc`):

```json
"importOrder": [
  "^next$|^react$|^react/(.*)|^next/(.*)",
  "<THIRD_PARTY_MODULES>",
  "@/(.*)|^[./]"
],
"importOrderSeparation": true
```

That produces three groups separated by blank lines:

1. `react`, `react-dom`, `next`, `next/...` — framework imports first.
2. Other third-party modules (`@reduxjs/toolkit`, `next-themes`, `react-icons`, ...).
3. Local imports — both `@/...` aliases AND relative (`./`, `../`) — mixed in one group.

```ts
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { useTheme } from 'next-themes';

import NavLink from './nav-link';
import Burger from '@/components/buttons/burger';
import { useScroll } from '@/hooks/use-scroll';
```

Prettier sorts within each group automatically — don't fight it.

## Barrel Exports

Some folders here DO have `index.ts` / `index.tsx` re-exports (`src/components/header/`, `src/components/footer/`, `src/components/welcome-photo/`, ...). They're a convenience for the consumer pattern `import Header from '@/components/header'`.

**Keep the existing pattern.** When adding a NEW shared component with a single export, an `index.ts` is fine. When the component has multiple named exports, prefer direct imports from the source file.

## Type Imports

Use `import type { ... }` for types that are erased at compile time:

```ts
import type { Metadata } from 'next';
import type { Article } from '@/store/Article/Article.types';
```

When the same module exports both values and types, you can split or combine — both work with TypeScript's `verbatimModuleSyntax`. This project doesn't enforce one or the other; match the file you're editing.

## Side-Effect Imports

Global stylesheet — only in `src/app/layout.tsx`:

```ts
import '@/styles/globals.css';
```

Don't import `globals.css` from anywhere else.

## Next.js Conventions

- `next/image` for images.
- `next/link` for in-app navigation. Use `<a>` only for `target='_blank'` external links inside a `<Link>`, or for `mailto:` / `tel:`.
- `next/font/google` is loaded ONCE in `src/app/layout.tsx`. Don't re-instantiate per-component.
- `next/navigation` (NOT `next/router`) for the App Router (`useRouter`, `usePathname`, `useSearchParams`, `notFound`, `redirect`).
