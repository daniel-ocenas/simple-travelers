---
name: style-guide
description: Use when styling components — Tailwind first, inline style for one-offs, no global CSS by reflex; dark mode via class
---

# style-guide

How to style in this Next.js + Tailwind app. No external design system — Tailwind utilities + a small set of custom tokens in `tailwind.config.js`.

## When to Use

- Any new component / page
- Refactoring over-stylized code back to utilities
- Reviewing a PR with styling concerns

## When NOT to Use

- Pure logic refactors with no visual change.

## The Priority Ladder

| Priority | Method | When |
|---|---|---|
| 1 | **Tailwind utility classes** | Almost everything (spacing, color, flex, grid, typography) |
| 2 | **Inline `style` prop** | One-off pixel values, dynamic values from state, things Tailwind doesn't cover |
| 3 | **Project tokens** in `tailwind.config.js` | Reused color / shadow tokens (extend, then use) |
| 4 (last) | **CSS in `src/styles/globals.css`** | Genuine global concerns (`.scrollbar`, `.bg-glass`, custom `@layer` styles) |

> [!CAUTION]
> **Do NOT create new `.module.css` / `.module.scss` files by reflex.** Tailwind covers most cases. Global one-offs go in `src/styles/globals.css`.

## Tailwind First

```tsx
<div className='mx-auto flex max-w-screen-xl flex-col items-center gap-4 px-4 py-8'>
  <h2 className='text-2xl font-bold'>Title</h2>
  <p className='text-secondary text-base'>Body</p>
</div>
```

Common patterns:
- Layout: `flex`, `grid`, `grid-cols-N`, `items-center`, `justify-between`, `gap-N`, `mx-auto`
- Spacing: `m-N`, `p-N`, `mt-N`, `mb-N`, `px-N`, `py-N`
- Sizing: `w-full`, `max-w-screen-xl`, `h-60`, `min-h-screen`
- Typography: `text-xl`, `font-bold`, `line-clamp-2`, `text-center`
- Color: project tokens — see below
- Responsive: `sm:`, `md:`, `lg:`, `xl:` (mobile-first)
- Dark: `dark:` (class-based, see Theming)

## Project Color Tokens

From `tailwind.config.js`:

```js
customGray: { light: '#3c3c48', base: '#eeeeee', dark: '#1f2028' }
dividerShadow: { light: '#f7f7f7', dark: '#1f2028' }
```

And in `src/styles/globals.css` (Tailwind layer extensions): `text-primary`, `text-secondary`, `bg-primary`, `bg-secondary`, `.bg-glass`, `.scrollbar`.

**Use the tokens, not raw hex.** If you need a new color, add it to `tailwind.config.js` and reuse via the utility class.

## Dark Mode

Tailwind's `darkMode: 'class'` is on, driven by `next-themes` (`attribute='class'`). Prefix utilities with `dark:`:

```tsx
<div className='bg-white text-gray-900 dark:bg-customGray-dark dark:text-gray-100'>
  …
</div>
```

> [!IMPORTANT]
> Test every new view in BOTH light AND dark mode. Toggle via the `ThemeToggle` component or `prefers-color-scheme` in devtools.

Hydration gotcha: if a component branches on the resolved theme value (`useTheme()`), the SSR render (no theme) and CSR render (resolved) will diverge. Use `useMounted` to defer until after mount, or pure CSS via `dark:` utilities (which Tailwind ships with no JS).

## Inline `style` — One-Offs

```tsx
<div style={{ maxWidth: 600 }}>…</div>
<div style={{ width: `${progress}%` }}>…</div>
```

When to reach for inline:
- A specific pixel value not covered by a utility.
- A dynamic value from props / state.

When NOT inline:
- Anything covered by a utility.
- Hex colors — use a token.

## Responsive

Mobile-first. Default utilities apply at the smallest breakpoint; `md:` / `lg:` override at larger ones.

```tsx
<div className='flex flex-col gap-2 md:flex-row md:gap-4'>…</div>
```

Test at 375px (mobile) AND ≥1024px (desktop) before declaring a view done. The site has heavy use of `useMedium` / `useLarge` from `src/hooks/use-breakpoint.ts` — for fully different layouts (e.g. desktop `<NavList>` vs mobile `<NavMenu>` in the header), JS-driven branching is the existing pattern.

## Images

Tailwind doesn't style `next/image`'s output reliably for cover patterns. Use `style={{ objectFit: 'cover' }}` + `fill`:

```tsx
<div className='relative h-60'>
  <Image src={image} alt={title} fill style={{ objectFit: 'cover' }} />
</div>
```

For sized images: `width` + `height` props.

## Animations

Use Tailwind's built-ins (`transition`, `duration-300`, `ease-in-out`, `hover:scale-[1.02]`) for simple cases.

For keyframes, extend `tailwind.config.js`:

```js
theme: { extend: { keyframes: { ... }, animation: { ... } } }
```

Only fall back to `@keyframes` in `globals.css` when extending Tailwind isn't enough.

## Common Mistakes

| Thought | Reality |
|---|---|
| "I'll create a `.module.scss`" | Tailwind first. `globals.css` only for global concerns. Modules are last resort. |
| "Inline `padding: '8px'`" | Use `className='p-2'`. |
| "Hex code in `style={{ color: '#3a8c5f' }}`" | Use a Tailwind color token. Add to `tailwind.config.js` if missing. |
| "I'll skip the `dark:` variants" | Always test BOTH modes. |
| "Tailwind class for `objectFit` on `next/image`" | Tailwind's `object-cover` works for `<img>` but not always for `next/image` w/ `fill`. Use inline `style={{ objectFit: 'cover' }}` for reliability. |

## Red Flags — STOP

- Creating a new `.module.css` / `.module.scss` → first try Tailwind utilities.
- Hex code in inline style → add to `tailwind.config.js` and use a token.
- Missing `dark:` for elements that visually change between themes.
- A class string > 200 chars → consider extracting a component with sane defaults instead of repeating the string.

## See Also

- `[[create-component]]` — how this gets applied
- `[[accessibility]]` — color contrast, non-color-only signals
- `[[../../rules/conventions]]`
