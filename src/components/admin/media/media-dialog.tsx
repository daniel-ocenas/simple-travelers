'use client';

import { useEffect } from 'react';

import { StoredAsset } from '@/lib/cms/asset.types';

import MediaLibrary from './media-library';

export default function MediaDialog({
  open,
  onClose,
  onSelect,
}: {
  open: boolean;
  onClose: () => void;
  onSelect: (asset: StoredAsset) => void;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/40 p-4 sm:p-8"
      onClick={onClose}
    >
      <div
        className="mt-8 w-full max-w-3xl rounded-xl bg-white p-6 shadow-2xl dark:bg-gray-900"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold">Media library</h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded-md px-2 py-1 text-sm text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            Close
          </button>
        </div>
        <MediaLibrary
          onSelect={(asset) => {
            onSelect(asset);
            onClose();
          }}
        />
      </div>
    </div>
  );
}
