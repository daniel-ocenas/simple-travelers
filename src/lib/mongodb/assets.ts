import { StoredAsset } from '@/lib/cms/asset.types';

import { dbConnect } from './dbConnect';

const COLLECTION = 'assets';

export async function listAssets(): Promise<StoredAsset[]> {
  const { db } = await dbConnect();
  return db
    .collection<StoredAsset>(COLLECTION)
    .find({}, { projection: { _id: 0 } })
    .sort({ uploadedAt: -1 })
    .toArray();
}

export async function createAsset(asset: StoredAsset): Promise<void> {
  const { db } = await dbConnect();
  await db
    .collection(COLLECTION)
    .updateOne({ key: asset.key }, { $set: asset }, { upsert: true });
}

export async function deleteAssetRecord(key: string): Promise<void> {
  const { db } = await dbConnect();
  await db.collection(COLLECTION).deleteOne({ key });
}
