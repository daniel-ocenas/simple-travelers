'use client';

import { Node } from '@tiptap/core';
import { ReactNodeViewRenderer } from '@tiptap/react';

import {
  ImageBlock,
  ImagePairBlock,
  VideoBlock,
} from '@/store/Article/Article.types';

import MediaBlockView from './media-block-view';

export type MediaBlock = ImageBlock | ImagePairBlock | VideoBlock;

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    mediaBlock: {
      insertMediaBlock: (block: MediaBlock) => ReturnType;
    };
  }
}

export const MediaBlockExtension = Node.create({
  name: 'mediaBlock',
  group: 'block',
  atom: true,
  selectable: true,
  draggable: true,

  addAttributes() {
    return {
      // The full typed Block is carried in the node so new uploads survive
      // the round-trip without depending on the original article.
      block: { default: null },
    };
  },

  parseHTML() {
    return [{ tag: 'div[data-media-block]' }];
  },

  renderHTML() {
    return ['div', { 'data-media-block': '' }];
  },

  addNodeView() {
    return ReactNodeViewRenderer(MediaBlockView);
  },

  addCommands() {
    return {
      insertMediaBlock:
        (block) =>
        ({ commands }) =>
          commands.insertContent({ type: this.name, attrs: { block } }),
    };
  },
});
