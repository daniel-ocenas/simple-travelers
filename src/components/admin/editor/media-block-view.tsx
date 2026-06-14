'use client';

import { NodeViewProps, NodeViewWrapper } from '@tiptap/react';

const LABELS: Record<string, string> = {
  image: 'Image',
  imagePair: 'Image pair',
  video: 'Video',
};

export default function MediaBlockView({ node, deleteNode }: NodeViewProps) {
  const blockType = node.attrs.blockType as keyof typeof LABELS;

  return (
    <NodeViewWrapper className="my-3">
      <div
        className="group flex items-center justify-between rounded-lg border border-dashed border-gray-300 bg-gray-50/60 px-4 py-3 text-sm dark:border-gray-700 dark:bg-gray-900/60"
        data-block-key={node.attrs.key}
      >
        <div className="flex items-center gap-3">
          <span className="rounded bg-gray-200 px-1.5 py-0.5 text-xs font-medium uppercase tracking-wide text-gray-700 dark:bg-gray-700 dark:text-gray-200">
            {LABELS[blockType] ?? blockType}
          </span>
          <span className="text-gray-500 dark:text-gray-400">
            (preserved on save — preview on public page)
          </span>
        </div>
        <button
          type="button"
          onClick={deleteNode}
          className="rounded px-2 py-1 text-xs text-gray-500 opacity-0 transition-opacity hover:bg-gray-200 hover:text-gray-900 group-hover:opacity-100 dark:hover:bg-gray-700 dark:hover:text-gray-100"
        >
          Remove
        </button>
      </div>
    </NodeViewWrapper>
  );
}
