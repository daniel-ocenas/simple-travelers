'use client';

import { NodeViewProps, NodeViewWrapper } from '@tiptap/react';
import Image from 'next/image';

import {
  Block,
  ImageBlock,
  ImagePairBlock,
  VideoBlock,
} from '@/store/Article/Article.types';

function Thumb({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative aspect-[3/2] w-full overflow-hidden rounded-md bg-gray-100 dark:bg-gray-800">
      <Image src={src} alt={alt} fill sizes="320px" className="object-cover" />
    </div>
  );
}

export default function MediaBlockView({
  node,
  updateAttributes,
  deleteNode,
}: NodeViewProps) {
  const block = node.attrs.block as Block | null;

  if (!block) {
    return (
      <NodeViewWrapper className="my-3">
        <div className="rounded-lg border border-dashed border-red-300 p-3 text-sm text-red-500">
          Empty media block
          <button type="button" onClick={deleteNode} className="ml-2 underline">
            remove
          </button>
        </div>
      </NodeViewWrapper>
    );
  }

  function setAlt(alt: string) {
    const img = block as ImageBlock;
    updateAttributes({
      block: { ...img, asset: { ...img.asset, alt } },
    });
  }

  return (
    <NodeViewWrapper className="my-3">
      <div className="rounded-lg border border-gray-200 bg-gray-50/60 p-3 dark:border-gray-700 dark:bg-gray-900/60">
        <div className="mb-2 flex items-center justify-between">
          <span className="rounded bg-gray-200 px-1.5 py-0.5 text-xs font-medium uppercase tracking-wide text-gray-700 dark:bg-gray-700 dark:text-gray-200">
            {block._type}
          </span>
          <button
            type="button"
            onClick={deleteNode}
            className="rounded px-2 py-1 text-xs text-gray-500 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-gray-100"
          >
            Remove
          </button>
        </div>

        {block._type === 'image' && (
          <div className="space-y-2">
            <Thumb src={block.asset.src} alt={block.asset.alt} />
            <input
              value={block.asset.alt}
              onChange={(e) => setAlt(e.target.value)}
              placeholder="Alt text (describe the image)"
              className="w-full rounded-md border border-gray-300 bg-white px-2 py-1 text-xs dark:border-gray-700 dark:bg-gray-950"
            />
          </div>
        )}

        {block._type === 'imagePair' && (
          <div className="grid grid-cols-2 gap-2">
            <Thumb
              src={(block as ImagePairBlock).left.src}
              alt={(block as ImagePairBlock).left.alt}
            />
            <Thumb
              src={(block as ImagePairBlock).right.src}
              alt={(block as ImagePairBlock).right.alt}
            />
          </div>
        )}

        {block._type === 'video' && (
          <div className="text-xs text-gray-500 dark:text-gray-400">
            {(block as VideoBlock).provider}: {(block as VideoBlock).src}
          </div>
        )}
      </div>
    </NodeViewWrapper>
  );
}
