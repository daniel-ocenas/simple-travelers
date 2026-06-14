import { StoredAsset } from '@/lib/cms/asset.types';

export async function uploadImage(file: File): Promise<StoredAsset> {
  const form = new FormData();
  form.set('file', file);

  const res = await fetch('/api/upload', { method: 'POST', body: form });
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.error ?? `Upload failed (${res.status})`);
  }
  return res.json();
}

export async function fetchAssets(): Promise<StoredAsset[]> {
  const res = await fetch('/api/assets', { cache: 'no-store' });
  if (!res.ok) throw new Error(`Failed to load assets (${res.status})`);
  const data = await res.json();
  return data.assets ?? [];
}

export async function deleteAsset(key: string): Promise<void> {
  const res = await fetch(`/api/assets?key=${encodeURIComponent(key)}`, {
    method: 'DELETE',
  });
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.error ?? `Delete failed (${res.status})`);
  }
}
