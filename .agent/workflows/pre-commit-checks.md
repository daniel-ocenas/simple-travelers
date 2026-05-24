# Workflow: Pre-Commit Checks

## What the Project Provides

`package.json` defines:

```bash
npm run lint      # next lint
npm run ts        # tsc --noEmit
npm run inspect   # lint && ts  (the combined gate)
npm run format    # prettier --write src/
```

There is no test command — there are no tests in this repo yet.

## Agent Behavior

**Default: run `npm run inspect` before suggesting a commit.** Unlike multi-repo backend setups, here the gate is cheap (lint + typecheck only) and catches the most common mistakes (unused imports, broken types after a refactor).

If the user explicitly says "skip checks" or "commit fast", honor that.

## What `inspect` Catches

- ESLint errors (unused vars, `react-hooks/rules-of-hooks`, `react-hooks/exhaustive-deps`).
- TypeScript errors (`tsc --noEmit`).

It does NOT catch:

- Runtime errors (no test suite).
- Visual regressions (no Storybook / screenshot tests).
- Hydration mismatches that only surface in the browser.

For visual / runtime correctness, the user must open the dev server in a browser. Don't claim a UI change is done based on `inspect` passing alone.

## If a Hook Fails

The commit did NOT land. `--amend` would rewrite a different commit. Instead:

1. Read the hook output to identify the failure.
2. Fix the underlying issue.
3. Re-stage the affected files.
4. Create a **new** commit with the same intent.

Never:

- `git commit --no-verify`
- `git commit --amend --no-verify`
- Disable a lint rule to make the gate green

## What's Out of Scope

- Pushing — Vercel auto-deploys `main` on push, so pushing is a production deploy. The agent never pushes; the user pushes manually.
- Running the dev server — assume it's already running on `localhost:3000`.
- Running `npm run build` — Vercel runs the prod build on push.
