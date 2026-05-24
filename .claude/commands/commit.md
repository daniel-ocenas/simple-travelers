---
description: Inspect working tree, draft a Conventional Commit, commit locally (no push)
argument-hint: "[optional context hint, e.g. 'wip on instagram grid']"
allowed-tools: Bash, Read, Glob, Grep
---

You are running the `/commit` workflow for the **simple-travelers** repo. Single Git repo — one inspection, one commit.

Optional user hint for this run: **$ARGUMENTS**
If empty, infer the commit message purely from the diff.

Conventional Commits style — `type(scope): subject`, lowercase, no trailing period, short subject (≤ 72 chars). Do NOT spend a tool call re-discovering this with `git log`.

## Step 1 — Inspect

Run in parallel:

- `git status` (NEVER `-uall`)
- `git diff` (unstaged)
- `git diff --cached` (staged)
- `git log -n 5 --oneline` (style reference)

## Step 2 — Decide

1. **Skip cleanly** if `git status` shows no untracked files and no modifications. Do NOT create empty commits.
2. **Scan for secrets** before staging: `.env*`, `*.key`, `*.pem`, `credentials*`, `*.local`. If any of these match modified or untracked files, abort and warn the user.
3. **Cross-check `CLAUDE.md`**: if the diff added a new page / shared component / custom hook / env var, confirm the corresponding table in `CLAUDE.md` is updated. If not, suggest the update BEFORE committing (don't auto-edit unless the user asks).
4. **Draft the message**:
   - Subject: `type(scope): short summary`
   - `type` ∈ `feat | fix | chore | docs | refactor | style | perf`
   - `scope` (optional): the affected route, component, or area — `blog`, `header`, `mongo`, `redux`, etc.
   - Body (only if multiple distinct changes OR non-obvious *why*): wrap at ~72 chars, focus on **why**, not what.

## Step 3 — Commit

Use `--all` so every tracked modification is swept in. Use a heredoc for multiline messages:

```bash
git commit --all -m "$(cat <<'EOF'
type(scope): subject

Optional body explaining why.
EOF
)"
```

`--all` does NOT include **untracked** (new) files. If `git status` lists untracked files that clearly belong with this change (a new component, a new page), `git add <file>` them by name first. Never `git add -A` / `git add .` — those bypass the secret scan.

After committing, `git status` to confirm a clean tree.

## Rules

- **Never push.** Vercel auto-deploys `main` on push, so pushing is a production deploy. The user pushes manually.
- **Never amend, never `--no-verify`, never `--no-gpg-sign`.** If a pre-commit hook fails, fix the underlying issue and create a **new** commit.
- Do NOT run `npm run dev` / `start` — the dev server is already running.
- Optionally run `npm run inspect` (lint + typecheck) BEFORE committing IF the user hasn't done so already and the diff is non-trivial. Skip on tiny doc-only / comment-only diffs.

## Final Report

```markdown
| Result | Commit |
|---|---|
| committed / skipped (clean) / blocked / failed | `<short hash>` `<subject>` |
```

If blocked (would have staged a secret, hook failure you couldn't resolve, stale CLAUDE.md), call it out explicitly under the table. Stop after the summary. Do NOT push.
