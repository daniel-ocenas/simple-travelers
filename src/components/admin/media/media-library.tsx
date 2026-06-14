'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import { StoredAsset } from '@/lib/cms/asset.types';
import {
  deleteAsset,
  fetchAssets,
  uploadImage,
} from '@/lib/cms/upload-client';

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
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          disabled={busy}
          className="inline-flex items-center rounded-md bg-gray-900 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-gray-800 disabled:opacity-60 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-white"
        >
          {busy ? 'Uploading…' : 'Upload images'}
        </button>
        {onSelect && (
          <span className="text-xs text-gray-500 dark:text-gray-400">
            Click an image to select it
          </span>
        )}
      </div>

      {error && (
        <p className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700 dark:border-red-900 dark:bg-red-950/40 dark:text-red-300">
          {error}
        </p>
      )}

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
                <button
                  type="button"
                  onClick={() => handleDelete(asset.key)}
                  className="rounded px-1.5 py-0.5 text-xs text-gray-400 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950/40"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
