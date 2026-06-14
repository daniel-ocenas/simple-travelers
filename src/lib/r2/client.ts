import { S3Client } from '@aws-sdk/client-s3';

let cached: S3Client | null = null;

export function r2Client(): S3Client {
  if (cached) return cached;

  const accountId = process.env.R2_ACCOUNT_ID;
  const accessKeyId = process.env.R2_ACCESS_KEY_ID;
  const secretAccessKey = process.env.R2_SECRET_ACCESS_KEY;

  if (!accountId || !accessKeyId || !secretAccessKey) {
    throw new Error(
      'R2 is not configured (R2_ACCOUNT_ID / R2_ACCESS_KEY_ID / R2_SECRET_ACCESS_KEY)',
    );
  }

  cached = new S3Client({
    region: 'auto',
    endpoint: `https://${accountId}.r2.cloudflarestorage.com`,
    credentials: { accessKeyId, secretAccessKey },
  });
  return cached;
}

export function r2Bucket(): string {
  const bucket = process.env.R2_BUCKET;
  if (!bucket) throw new Error('R2_BUCKET is not set');
  return bucket;
}

export function r2PublicUrl(key: string): string {
  const base = process.env.R2_PUBLIC_URL;
  if (!base) throw new Error('R2_PUBLIC_URL is not set');
  return `${base.replace(/\/$/, '')}/${key}`;
}
