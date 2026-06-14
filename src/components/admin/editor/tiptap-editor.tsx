'use client';

import { JSONContent } from '@tiptap/core';
import Link from '@tiptap/extension-link';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { useImperativeHandle, type Ref } from 'react';

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
      <Toolbar editor={editor} />
      <EditorContent
        editor={editor}
        className="min-h-[480px] rounded-b-lg border border-gray-200 bg-white px-4 py-3 dark:border-gray-800 dark:bg-gray-950"
      />
    </div>
  );
}
