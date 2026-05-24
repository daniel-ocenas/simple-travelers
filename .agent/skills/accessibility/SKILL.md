---
name: accessibility
description: Use when adding UI — semantic HTML, keyboard nav, alt text, ARIA where needed, color contrast, dark-mode parity
---

# accessibility

Make the UI usable for keyboard, screen reader, and low-vision users.

## When to Use

- Every new component / page
- Reviewing existing UI for an a11y audit
- Investigating "this doesn't work with the keyboard" reports

## When NOT to Use

- Pure utility / data code — no a11y surface.

## The Checklist

### 1. Semantic HTML

Right element for the job:

| Need | Element |
|---|---|
| Clickable action | `<button type='button'>` (NOT `<div onClick>`) |
| Navigation to another page | `<Link>` (NOT `<button onClick={navigate}>`) |
| Section heading | `<h1>` → `<h2>` → `<h3>` in order |
| List of things | `<ul>` / `<ol>` |
| Form input | `<input>` / `<select>` / `<textarea>` |
| Image with meaning | `<Image alt='…' />` |
| Decorative image | `<Image alt='' />` (empty alt) |
| Article-like content | `<article>`, `<section>`, `<time dateTime='…'>` |

The codebase already uses `<button>`, `<Link>`, `<article>`, `<time>` in the right places (see `src/components/posts/card.tsx`). Keep the pattern.

### 2. Heading Hierarchy

One `<h1>` per page (often the page title in `page.tsx`). Subsequent sections use `<h2>` → `<h3>`. Don't skip levels for visual sizing — use Tailwind for size, semantic level for outline.

### 3. Keyboard Navigation

Every interactive element must be reachable + operable via keyboard:

- **Tab** moves forward, **Shift+Tab** backward.
- **Enter** / **Space** activates buttons.
- **Esc** closes modals / cancels selections.
- Focus indicator visible at every stop (Tailwind's `focus-visible:` utilities).

Test by:
1. Tab through the page → focus visible at every stop.
2. No focus lands on hidden or `display: none` elements.
3. Tab order matches visual order.

### 4. Focus Visibility

By default browser focus rings are okay but sometimes hidden by `outline-none`. Use `focus-visible:ring-2` (or similar) to restore.

```tsx
<button className='focus-visible:ring-customGray-light focus-visible:ring-2 …'>
```

### 5. Alt Text

```tsx
// ✅ meaningful image
<Image src='/static/images/Bali.jpg' alt='View of Mt Agung from Lahangan Sweet at sunset' fill />

// ✅ decorative image
<Image src='/static/icons/divider.png' alt='' />

// ❌ no alt or filename-as-alt
<Image src='/x.jpg' alt='x.jpg' />
```

For Slovak content, the alt should be in Slovak.

### 6. Mobile Menu

The site's mobile `<NavMenu>` uses a fixed-position drawer. Things to check on every change there:

- The burger button is `<button>` (it is — `src/components/buttons/burger.tsx`).
- Tabbing into the drawer works; **Esc** should close it (currently click-outside works; if you add a modal-like overlay, consider adding Esc).
- The drawer doesn't trap focus permanently when closed.

### 7. ARIA — Sparingly

ARIA fills gaps; it doesn't replace semantic HTML.

| Need | ARIA |
|---|---|
| Icon-only button | `aria-label='Close'` |
| Toggle button (pressed state) | `aria-pressed={on}` |
| Live updates (toast, alert) | `aria-live='polite'` or `'assertive'` |
| Disabled-but-focusable | `aria-disabled='true'` |
| Decorative icon | `aria-hidden='true'` |

**Never:**
- `role='button'` on a `<div>` — use `<button>`.
- `tabindex>0` — breaks tab order.
- ARIA labels that contradict visible labels.

### 8. Color Contrast

- Text ≥ 4.5:1 against background (WCAG AA).
- Large text (≥ 18pt, or 14pt bold) ≥ 3:1.
- UI borders ≥ 3:1.

Use the project's color tokens (they should meet AA). Check BOTH light and dark mode.

### 9. Color is Not the Only Signal

Error / success states need MORE than color — add an icon or text:

```tsx
// ❌
<span className='text-red-500'>Failed</span>

// ✅
<span className='text-red-500'><AlertIcon aria-hidden='true' /> Failed to load</span>
```

### 10. Theme Hydration

Components that switch behavior based on resolved theme (`useTheme`) must guard with `useMounted` — otherwise SSR (no theme) and CSR (resolved theme) diverge, causing flicker and screen-reader confusion.

```tsx
const mounted = useMounted();
const { theme } = useTheme();
if (!mounted) return null; // or a neutral placeholder
```

Or use CSS-only `dark:` utilities where possible — no JS, no hydration risk.

### 11. Reduced Motion

Respect `prefers-reduced-motion`:

```tsx
<div className='transition motion-reduce:transition-none hover:scale-[1.02] motion-reduce:hover:scale-100'>
```

For animations defined in `tailwind.config.js`, gate them similarly.

## Audit Tools

| Tool | How |
|---|---|
| Keyboard-only walkthrough | Unplug your mouse, navigate the new view |
| Browser DevTools "Lighthouse" tab | `Accessibility` audit on the production build |
| VoiceOver (macOS) / NVDA (Windows) | Screen-reader walkthrough |
| `axe DevTools` browser extension | Static analysis |

Lighthouse is fastest — run before declaring a feature done.

## Common Mistakes

| Thought | Reality |
|---|---|
| "`<div onClick>` looks like a button" | Not in tab order. Not activated by Space. Use `<button>`. |
| "Placeholder is the label" | Placeholders disappear on focus. Add `<label>` or `aria-label`. |
| "I'll add `role='button'` to the div" | Doesn't make it focusable. Doesn't add Space/Enter activation. Use `<button>`. |
| "Color is enough for error state" | Add an icon and a text label. |
| "Alt text for decorative images is good practice" | Empty `alt=''` is correct for decorative; meaningful alt for meaningful images. Filename-as-alt is the worst case. |
| "I'll skip dark-mode contrast" | Dark mode has its own contrast story. Test it. |

## Red Flags — STOP

- `onClick` on a `<div>` / `<span>` → switch to `<button type='button'>`.
- `<img>` instead of `next/image`.
- Missing or filename-style `alt`.
- Skipped heading levels for visual sizing — use Tailwind for size, semantic level for outline.
- A `useTheme()` branch that runs at SSR — guard with `useMounted`.

## See Also

- `[[create-component]]` — semantic HTML at creation
- `[[style-guide]]` — color contrast, dark mode
- `[[implement-ux]]` — loading / empty / error states (a11y versions)
