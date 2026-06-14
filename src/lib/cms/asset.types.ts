import { ImageAsset } from '@/store/Article/Article.types';

/**
 * An image stored in R2 and tracked in the Mongo `assets` collection.
 * Extends the public-facing `ImageAsset` with storage bookkeeping.
 */
export type StoredAsset = ImageAsset & {
  key: string; // R2 object key, also the Mongo _id
  filename: string; // original upload filename
  uploadedAt: string; // ISO 8601
};
