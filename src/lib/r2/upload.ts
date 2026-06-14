import { PutObjectCommand } from '@aws-sdk/client-s3';
import { randomUUID } from 'node:crypto';

import { getPlaiceholder } from 'plaiceholder';

import { StoredAsset } from '@/lib/cms/asset.types';

import { r2Bucket, r2Client, r2PublicUrl } from './client';

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
  const { base64, metadata } = await getPlaiceholder(input);

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
    width: metadata.width ?? 0,
    height: metadata.height ?? 0,
    blurDataURL: base64,
    filename,
    uploadedAt: new Date().toISOString(),
  };
}
