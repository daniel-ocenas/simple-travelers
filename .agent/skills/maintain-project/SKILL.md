---
name: maintain-project
description: Use when running, debugging, or operating the project — npm scripts, log locations, debugging entry points for Next.js + Vercel
---

# maintain-project

Quick reference for operating the project locally.

## When to Use

- Need a script name and don't remember it
- Debugging a build failure or runtime error
- Investigating where logs / coverage / config live

## When NOT to Use

- The user already has the dev server running — don't start another.

## Common Scripts

| Script | Purpose |
|---|---|
| `npm run dev` | `next dev` (Turbopack) — user usually has this running on `localhost:3000` |
| `npm run build` | `next build` — production build (Vercel runs this on push) |
| `npm run start` | `next start` — production server locally |
| `npm run lint` | `next lint` (ESLint) |
| `npm run ts` | `tsc --noEmit` |
| `npm run inspect` | `lint && ts` — the combined gate |
| `npm run format` | `prettier --write src/` |

There is no test script — no test suite exists yet.

## Log Locations

| Source | Location |
|---|---|
| Dev server | Terminal where `npm run dev` runs |
| Vercel production | Vercel dashboard → Logs tab (per deployment) |
| Mongo helper failures | `console.error` to stdout (caught by Vercel logs) |
| Hydration warnings | Browser console (look for "Hydration failed" / "did not match") |

## Debugging Entry Points

### Hydration mismatch

1. Open the browser console — find the "Hydration failed" message.
2. Common causes:
   - Theme-dependent rendering without `useMounted` guard.
   - Time-dependent values (`new Date()`, `Math.random()`) computed during render.
   - `localStorage` / `sessionStorage` read during render.
3. Fix by deferring with `useMounted` OR moving the logic into `useEffect`.

### Build fails on Vercel but passes locally

1. Check Vercel build logs for the exact error.
2. Common diffs:
   - Env var missing on Vercel (set in Project → Settings → Environment Variables).
   - Case-sensitivity (`Header` vs `header`) on Linux but not macOS.
   - Native dependency (e.g. `sharp`) — usually fine, but check the platform-specific install.
3. Reproduce by running `npm run build` locally.

### Route returns 404 unexpectedly

1. Confirm the file path matches the URL: `src/app/blog/[slug]/page.tsx` ↔ `/blog/<slug>`.
2. Check `generateStaticParams` — if the slug isn't in the returned list, the route is dynamic and depends on runtime data.
3. Check that the file exports a default function.

### Image doesn't load

1. Confirm the path. `public/static/images/Foo.jpg` is served at `/static/images/Foo.jpg`.
2. `images: { unoptimized: true }` means the Next image optimizer is OFF — paths still work, but external URLs need to be in a CDN you control (or proxied).
3. For Mongo-sourced URLs: confirm the field actually has a value.

### Mongo connection fails

1. Check env vars: `DB_URL`, `DB_NAME`, `DB_USER_VIEWER_NAME`, `DB_USER_VIEWER_PW`.
2. Inspect `src/lib/mongodb/dbConnect.js` — it's a singleton; a stale connection can persist across hot reloads in dev.
3. Test with `mongosh "$DB_URL"` outside the app.

### Server component runs on every request when it should be static

1. Check whether the component calls `cookies()`, `headers()`, or `searchParams` — these force dynamic.
2. Check whether `export const dynamic = 'force-dynamic'` was added unintentionally.
3. For ISR, add `export const revalidate = N` to the page file.

## Vercel Deploys

- `git push origin main` triggers a production deploy.
- Branch pushes trigger preview deploys (URL in the GitHub PR check, or Vercel dashboard).
- Roll back from Vercel dashboard → Deployments → "Promote to Production" on an older one.

## When To Reach For The User

- Build passes locally but Vercel fails → ask for the Vercel build log.
- A page works in dev but not in prod → could be ISR / static caching; ask whether `revalidate` was set.
- Mongo connectivity issue → flag credentials / network, don't try to debug remote infra blindly.

## See Also

- `[[../../workflows/pre-commit-checks]]` — when to run `npm run inspect`
- `[[../../rules/nextjs-patterns]]` — static / dynamic / ISR semantics
