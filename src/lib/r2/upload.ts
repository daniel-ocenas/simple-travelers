import { PutObjectCommand } from '@aws-sdk/client-s3';
import { randomUUID } from 'node:crypto';

import { getPlaiceholder } from 'plaiceholder';
import sharp from 'sharp';

import { StoredAsset } from '@/lib/cms/asset.types';

import { r2Bucket, r2Client, r2PublicUrl } from './client';

// libvips caches decoded buffers across operations by default; in a
// long-lived server process doing many uploads that accumulates until OOM.
// Disable the cache and cap concurrency so each upload's memory is bounded.
sharp.cache(false);
sharp.concurrency(1);

// Width of the tiny copy used only for the blur placeholder. plaiceholder
// must never decode a full-resolution original (a <2 MB JPEG can expand to
// 100+ MB of raw pixels).
const BLUR_WIDTH = 32;

const CONTENT_TYPE_EXT: Record<string, string> = {
  'image/jpeg': 'jpg',
  'image/png': 'png',
  'image/webp': 'webp',
  'image/avif': 'avif',
};

function slugifyName(filename: string): string {
  return (
    filename
      .replace(/\.[^.]+$/, '')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')
      .slice(0, 48) || 'image'
  );
}

/**
 * Store the image as-is (resizing/format is done upstream, e.g. Lightroom),
 * generating a blur placeholder + reading dimensions, then PUT to R2.
 * Caller persists the returned record to the assets collection.
 */
export async function uploadImageToR2(
  input: Buffer,
  filename: string,
  contentType: string,
): Promise<StoredAsset> {
  // Dimensions from the header only (no full-pixel decode).
  const meta = await sharp(input).metadata();

  // Blur from a tiny downscaled copy so we never hold the full image in RAM.
  const blurBuffer = await sharp(input)
    .resize(BLUR_WIDTH, null, { fit: 'inside' })
    .toBuffer();
  const { base64 } = await getPlaiceholder(blurBuffer);

  const ext = CONTENT_TYPE_EXT[contentType] ?? 'jpg';
  const key = `articles/${slugifyName(filename)}-${randomUUID().slice(0, 8)}.${ext}`;

  await r2Client().send(
    new PutObjectCommand({
      Bucket: r2Bucket(),
      Key: key,
      Body: input,
      ContentType: contentType,
      CacheControl: 'public, max-age=31536000, immutable',
    }),
  );

  return {
    key,
    src: r2PublicUrl(key),
    alt: '',
    width: meta.width ?? 0,
    height: meta.height ?? 0,
    blurDataURL: base64,
    filename,
    uploadedAt: new Date().toISOString(),
  };
}
