# MongoDB Atlas Setup — Backing Store for Articles

Articles are the only collection we use Mongo for. `src/services/posts.ts` reads from Mongo first and falls back to the static `src/data/article-list.ts` if Mongo is unreachable — so the site keeps working even with no DB configured.

The collection lives under `<DB_NAME>.articles`. Documents are `Article` objects (see `src/store/Article/Article.types.ts`).

---

## Part 1 — Create or restore an Atlas cluster (5–10 min)

### 1. Create a project + cluster
- Sign in at https://cloud.mongodb.com
- New Project → name it `simple-travelers` (or use an existing one)
- **Create Deployment** → **M0 Free Cluster**
- Provider: AWS, region close to Europe (Frankfurt `eu-central-1` is a good default)
- Name the cluster (e.g. `cluster0`)

### 2. Set up credentials
- **Database Access** → **Add New Database User**
  - Username: `simple-travelers-editor`
  - Password: generate strong, copy to password manager
  - Built-in role: **Atlas admin** (or `Read and write to any database` if you want least privilege)

### 3. Allow network access
- **Network Access** → **Add IP Address**
  - For local dev only: add your current IP
  - For Vercel: add `0.0.0.0/0` (allow from anywhere) — Vercel functions don't have a static egress IP on the free tier
  - Confirm

### 4. Grab the connection string
- Cluster → **Connect** → **Drivers** → Node.js
- Copy the URI, looks like `mongodb+srv://<user>:<pass>@<cluster>.<hash>.mongodb.net/?retryWrites=true&w=majority`
- Replace `<user>` and `<pass>` with the credentials from step 2

---

## Part 2 — Local project setup

### 5. Update `.env.local`

```bash
DB_URL=mongodb+srv://<user>:<pass>@<cluster>.<hash>.mongodb.net/?retryWrites=true&w=majority
DB_NAME=simple-travelers
```

### 6. Add the same vars to Vercel

```bash
vercel env add DB_URL
vercel env add DB_NAME
```

Or do it in the Vercel UI under **Settings → Environment Variables**.

### 7. Seed the collection

```bash
npm run seed-articles
```

This reads every article from `src/data/article-list.ts` and upserts it into the `articles` collection by `slug`. Creates two indexes:
- `slug` (unique) — for `getPost(slug)`
- `(status, publishedAt)` — for the eventual admin dashboard sort

Re-running is safe — upsert on `slug` means existing docs are updated, not duplicated.

### 8. Verify

```bash
npm run dev
```

Open any blog post in the browser. If the dev console shows no Mongo warning, you're reading from Mongo. If it shows `[services/posts] mongo unreachable, falling back to static:`, check `DB_URL` and Network Access.

---

## How the cutover works in code

[src/services/posts.ts](../../src/services/posts.ts):

```ts
async function fetchFromMongo(): Promise<Article[] | null> {
  if (!process.env.DB_URL || !process.env.DB_NAME) return null;
  try {
    const { db } = await dbConnect();
    return await db.collection<Article>('articles').find().toArray();
  } catch (err) {
    console.warn('mongo unreachable, falling back to static');
    return null;
  }
}
```

- No env vars set → static read.
- Envs set but cluster unreachable → 3-second timeout (see `serverSelectionTimeoutMS` in [dbConnect.ts](../../src/lib/mongodb/dbConnect.ts)) → fallback to static + log warning.
- Mongo returns documents → use Mongo.

This means **the static file remains the source of truth for the public site until you seed Mongo**. After seeding, Mongo takes over automatically.

---

## When the public site should fully cut over

After:
1. The admin app (Phase C) lands and you start editing articles through it.
2. You've confirmed Mongo data matches the static file.
3. You've ran `npm run seed-articles` at least once.

You can then delete `src/data/article-list.ts` (or trim it to a tiny dev seed) and remove the fallback in `posts.ts`. Until then, the dual-source pattern is safe and intentional.

---

## Operational notes

- **Free-tier auto-pause**: Atlas M0 clusters pause after 7 days of inactivity. They resume automatically on the next connection (adds ~30s to the first query). For a low-traffic blog this is fine.
- **Cluster gone**: if you see `DNS NXDOMAIN` on the cluster hostname, the cluster has been deleted (paused clusters still resolve). Create a new one and update `DB_URL`.
- **Backups**: M0 has no automatic backups. For a single-author blog, the static `article-list.ts` snapshot in git is your effective backup. Once we drop that file, set up `mongodump` to a cron or move to M2+.
- **Indexes**: the seed script creates `{slug: 1}` unique and `{status: 1, publishedAt: -1}`. Add more in `scripts/seed-articles.ts` as we add admin features that need them.
