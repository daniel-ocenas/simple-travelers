'use client';

import { JSONContent } from '@tiptap/core';
import Link from '@tiptap/extension-link';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { useImperativeHandle, useState, type Ref } from 'react';

import MediaDialog from '@/components/admin/media/media-dialog';
import { ImageBlock } from '@/store/Article/Article.types';

import './editor.css';
import { MediaBlockExtension } from './media-block-extension';
import Toolbar from './toolbar';

export type EditorHandle = {
  getJSON: () => JSONContent;
};

export default function TiptapEditor({
  initialContent,
  ref,
}: {
  initialContent: JSONContent;
  ref?: Ref<EditorHandle>;
}) {
  const [pickerOpen, setPickerOpen] = useState(false);

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({
        heading: { levels: [2, 3, 4] },
        strike: false,
        horizontalRule: false,
        codeBlock: false,
      }),
      Link.configure({
        openOnClick: false,
        autolink: true,
        HTMLAttributes: { rel: 'noopener noreferrer' },
      }),
      MediaBlockExtension,
    ],
    content: initialContent,
    editorProps: {
      attributes: {
        class: 'tiptap-prose focus:outline-none',
      },
    },
  });

  useImperativeHandle(
    ref,
    () => ({ getJSON: () => editor?.getJSON() ?? { type: 'doc' } }),
    [editor],
  );

  return (
    <div className="tiptap-editor">
      <Toolbar editor={editor} onInsertImage={() => setPickerOpen(true)} />
      <EditorContent
        editor={editor}
        className="min-h-[480px] rounded-b-lg border border-gray-200 bg-white px-4 py-3 dark:border-gray-800 dark:bg-gray-950"
      />
      <MediaDialog
        open={pickerOpen}
        onClose={() => setPickerOpen(false)}
        onSelect={(asset) => {
          const block: ImageBlock = {
            _type: 'image',
            _key: globalThis.crypto.randomUUID().replace(/-/g, '').slice(0, 12),
            asset,
            aspect: 'auto',
          };
          editor?.chain().focus().insertMediaBlock(block).run();
        }}
      />
    </div>
  );
}
