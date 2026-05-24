# Cloudflare R2 Setup — Image Storage for the Blog CMS

R2 is Cloudflare's S3-compatible object storage. We use it for **all editor-uploaded images** (article hero images, body images, gallery images). It replaces the legacy pattern of committing JPEGs to `public/static/images/`.

**Why R2:**
- 10 GB storage free forever (no 12-month trial)
- **$0 egress, ever** — most other providers charge per GB served
- S3-compatible API — works with `@aws-sdk/client-s3`
- Cloudflare CDN in front of every bucket

---

## Part 1 — Cloudflare console (5–10 min)

### 1. Create Cloudflare account
- Sign up at https://dash.cloudflare.com/sign-up
- Verify email
- **A payment method is required even for the free tier** (Cloudflare requires a card on file to enable R2; you won't be charged unless you exceed the free limits)

### 2. Enable R2
- Left sidebar → **R2 Object Storage** → click **Purchase R2 Plan** (it's the free plan; the wording is misleading)
- Add payment method when prompted

### 3. Create the bucket
- R2 → **Create bucket**
- Name: `simple-travelers-images`
- Location hint: **Europe (EEUR)** — closest to the Slovak audience
- Default storage class: **Standard**
- Click **Create bucket**

### 4. Note the Account ID
- On the R2 overview page, top-right shows **Account ID** — copy it. It looks like `a1b2c3d4e5f6...` (32 hex chars).

### 5. Create an API token scoped to the bucket
- R2 → **Manage R2 API Tokens** (button top-right) → **Create API token**
- Token name: `simple-travelers-editor`
- Permissions: **Object Read & Write**
- Specify bucket: select `simple-travelers-images` only (don't grant account-wide access)
- TTL: **Forever** (or set a long expiry)
- Click **Create API Token**
- **IMMEDIATELY copy** the values shown — you cannot see the secret again:
  - **Access Key ID** (looks like `abc123...`)
  - **Secret Access Key** (looks like `xyz789...`)
  - **Endpoint** (looks like `https://<account-id>.r2.cloudflarestorage.com`)

### 6. Enable public read access

Do **Option A** for development, switch to **Option B** before production.

**Option A — `r2.dev` subdomain (dev/testing only):**
- Bucket → **Settings** tab → scroll to **Public access** → enable **Allow Access** under "R2.dev subdomain"
- Confirm the warning
- Cloudflare returns a URL like `https://pub-<hash>.r2.dev` — this is the **public base URL**

**Option B — Custom domain (production):**
- Bucket → **Settings** → **Custom Domains** → **Connect Domain**
- Enter `images.simpletravelers.sk`
- If `simpletravelers.sk` is on Cloudflare DNS, the record + cert are auto-provisioned. Otherwise (e.g. DNS is on Vercel), manually add a CNAME pointing `images.simpletravelers.sk` to the bucket target Cloudflare shows.
- Public base URL becomes `https://images.simpletravelers.sk`

> The `r2.dev` URL is rate-limited and Cloudflare's docs explicitly say not to use it for production traffic.

---

## Part 2 — Local project setup

### 7. Add env vars to `.env.local`

```bash
R2_ACCOUNT_ID=<from step 4>
R2_ACCESS_KEY_ID=<from step 5>
R2_SECRET_ACCESS_KEY=<from step 5>
R2_BUCKET=simple-travelers-images
R2_PUBLIC_URL=<from step 6 — pub-xxx.r2.dev or custom domain, no trailing slash>
```

### 8. Add the same vars to Vercel

For each var:
- Vercel project → **Settings** → **Environment Variables**
- Add the key + value, scope to **Production** and **Preview** (and **Development** if you want to test there)

Or via CLI from the project root:
```bash
vercel env add R2_ACCOUNT_ID
vercel env add R2_ACCESS_KEY_ID
vercel env add R2_SECRET_ACCESS_KEY
vercel env add R2_BUCKET
vercel env add R2_PUBLIC_URL
```

### 9. Install dependencies (done in Phase C)

```bash
npm install @aws-sdk/client-s3 sharp
```

`plaiceholder` is already in `package.json`.

### 10. Smoke test the public URL

```bash
curl -I "$R2_PUBLIC_URL/"
```

- `200` / `404` → bucket URL is reachable, you're good.
- DNS error / `530` → check the `R2_PUBLIC_URL` and DNS config.

---

## Part 3 — How the editor uses R2

```
Editor picks file
  ↓
POST /api/upload (server)
  ├─ sharp() → resize to max 2400px wide, encode WebP
  ├─ plaiceholder() → blurDataURL
  ├─ R2.putObject(key, buffer)  via @aws-sdk/client-s3
  └─ return { src, width, height, blurDataURL, alt: '' }
  ↓
Editor inserts an `image` block with the returned ImageAsset
```

Key format: `articles/<slug>/<uuid>.webp` — namespaced per article so deleting an article can sweep its assets cleanly.

---

## Operational notes

- **Backups**: Cloudflare doesn't auto-back-up R2. Set up a periodic `rclone sync` from R2 to local or another bucket if you want a safety net.
- **Free tier limits** (per month): 10 GB storage, 1M Class A ops (PUT/POST/LIST), 10M Class B ops (GET/HEAD). At blog scale you won't hit any of these.
- **Image variants**: We generate one WebP variant at max 2400px wide at upload. If we need responsive `srcset` later, generate 400/1200/2400 variants and store all three URLs on the `ImageAsset`. Don't generate variants on the fly — R2 has no transform layer.
- **Deletion**: When an article is deleted or an image block is removed, run a cleanup call that `DeleteObjects` the corresponding keys. Otherwise orphaned blobs accumulate.

---

## Related files (once Phase C lands)

- `src/lib/r2/client.ts` — S3 client singleton
- `src/lib/r2/upload.ts` — upload helper (sharp → plaiceholder → R2)
- `src/app/api/upload/route.ts` — App Router upload endpoint
