'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import { StoredAsset } from '@/lib/cms/asset.types';
import {
  deleteAsset,
  fetchAssets,
  uploadImage,
} from '@/lib/cms/upload-client';
import Alert from '@/ui/alert';
import Button from '@/ui/button';

export default function MediaLibrary({
  onSelect,
}: {
  onSelect?: (asset: StoredAsset) => void;
}) {
  const [assets, setAssets] = useState<StoredAsset[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetchAssets()
      .then(setAssets)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  async function handleFiles(files: FileList | null) {
    if (!files || files.length === 0) return;
    setBusy(true);
    setError(null);
    try {
      const uploaded: StoredAsset[] = [];
      for (const file of Array.from(files)) {
        uploaded.push(await uploadImage(file));
      }
      setAssets((prev) => [...uploaded, ...prev]);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Upload failed');
    } finally {
      setBusy(false);
      if (inputRef.current) inputRef.current.value = '';
    }
  }

  async function handleDelete(key: string) {
    if (!window.confirm('Delete this image permanently?')) return;
    const prev = assets;
    setAssets((a) => a.filter((x) => x.key !== key));
    try {
      await deleteAsset(key);
    } catch (e) {
      setAssets(prev);
      setError(e instanceof Error ? e.message : 'Delete failed');
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-4">
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          multiple
          hidden
          onChange={(e) => handleFiles(e.target.files)}
        />
        <Button onClick={() => inputRef.current?.click()} disabled={busy}>
          {busy ? 'Uploading…' : 'Upload images'}
        </Button>
        {onSelect && (
          <span className="text-xs text-gray-500 dark:text-gray-400">
            Click an image to select it
          </span>
        )}
      </div>

      {error && <Alert variant="error">{error}</Alert>}

      {loading ? (
        <p className="py-12 text-center text-sm text-gray-400">Loading…</p>
      ) : assets.length === 0 ? (
        <p className="py-12 text-center text-sm text-gray-400">
          No images yet. Upload some to get started.
        </p>
      ) : (
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {assets.map((asset) => (
            <li
              key={asset.key}
              className="group relative overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800"
            >
              <button
                type="button"
                onClick={() => onSelect?.(asset)}
                disabled={!onSelect}
                className={`relative block aspect-[4/3] w-full bg-gray-100 dark:bg-gray-900 ${
                  onSelect ? 'cursor-pointer' : 'cursor-default'
                }`}
              >
                <Image
                  src={asset.src}
                  alt={asset.alt || asset.filename}
                  fill
                  sizes="200px"
                  className="object-cover transition group-hover:opacity-90"
                />
              </button>
              <div className="flex items-center justify-between gap-1 px-2 py-1.5">
                <span className="truncate text-xs text-gray-500 dark:text-gray-400">
                  {asset.width}×{asset.height}
                </span>
                <Button
                  variant="danger"
                  size="xs"
                  onClick={() => handleDelete(asset.key)}
                >
                  Delete
                </Button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
