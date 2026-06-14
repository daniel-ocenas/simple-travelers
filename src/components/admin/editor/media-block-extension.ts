'use client';

import { Node } from '@tiptap/core';
import { ReactNodeViewRenderer } from '@tiptap/react';

import MediaBlockView from './media-block-view';

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    mediaBlock: {
      insertMediaBlock: (attrs: {
        key: string;
        blockType: 'image' | 'imagePair' | 'video';
      }) => ReturnType;
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
      key: { default: null },
      blockType: { default: 'image' },
    };
  },

  parseHTML() {
    return [{ tag: 'div[data-media-block]' }];
  },

  renderHTML({ node }) {
    return [
      'div',
      {
        'data-media-block': '',
        'data-key': node.attrs.key,
        'data-block-type': node.attrs.blockType,
      },
    ];
  },

  addNodeView() {
    return ReactNodeViewRenderer(MediaBlockView);
  },

  addCommands() {
    return {
      insertMediaBlock:
        (attrs) =>
        ({ commands }) =>
          commands.insertContent({ type: this.name, attrs }),
    };
  },
});
