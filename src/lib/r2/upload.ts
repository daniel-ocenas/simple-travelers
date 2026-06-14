import { PutObjectCommand } from '@aws-sdk/client-s3';
import { randomUUID } from 'node:crypto';

import { getPlaiceholder } from 'plaiceholder';
import sharp from 'sharp';

import { StoredAsset } from '@/lib/cms/asset.types';

import { r2Bucket, r2Client, r2PublicUrl } from './client';

const MAX_WIDTH = 2400;
const WEBP_QUALITY = 82;

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
 * Resize → WebP → blur, then PUT to R2. Returns the stored asset record.
 * Caller is responsible for persisting it to the assets collection.
 */
export async function uploadImageToR2(
  input: Buffer,
  filename: string,
): Promise<StoredAsset> {
  const pipeline = sharp(input).rotate();
  const meta = await pipeline.metadata();

  const resized = await pipeline
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: WEBP_QUALITY })
    .toBuffer({ resolveWithObject: true });

  const { base64 } = await getPlaiceholder(resized.data);

  const key = `articles/${slugifyName(filename)}-${randomUUID().slice(0, 8)}.webp`;

  await r2Client().send(
    new PutObjectCommand({
      Bucket: r2Bucket(),
      Key: key,
      Body: resized.data,
      ContentType: 'image/webp',
      CacheControl: 'public, max-age=31536000, immutable',
    }),
  );

  return {
    key,
    src: r2PublicUrl(key),
    alt: '',
    width: resized.info.width ?? meta.width ?? 0,
    height: resized.info.height ?? meta.height ?? 0,
    blurDataURL: base64,
    filename,
    uploadedAt: new Date().toISOString(),
  };
}
