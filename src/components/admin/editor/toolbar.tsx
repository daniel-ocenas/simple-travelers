'use client';

import { Editor } from '@tiptap/react';

type Btn = {
  label: string;
  title: string;
  isActive: (editor: Editor) => boolean;
  action: (editor: Editor) => void;
  group?: string;
};

const BUTTONS: Btn[] = [
  {
    group: 'inline',
    label: 'B',
    title: 'Bold (⌘B)',
    isActive: (e) => e.isActive('bold'),
    action: (e) => e.chain().focus().toggleBold().run(),
  },
  {
    group: 'inline',
    label: 'I',
    title: 'Italic (⌘I)',
    isActive: (e) => e.isActive('italic'),
    action: (e) => e.chain().focus().toggleItalic().run(),
  },
  {
    group: 'inline',
    label: '<>',
    title: 'Inline code',
    isActive: (e) => e.isActive('code'),
    action: (e) => e.chain().focus().toggleCode().run(),
  },
  {
    group: 'block',
    label: 'H2',
    title: 'Heading 2',
    isActive: (e) => e.isActive('heading', { level: 2 }),
    action: (e) => e.chain().focus().toggleHeading({ level: 2 }).run(),
  },
  {
    group: 'block',
    label: 'H3',
    title: 'Heading 3',
    isActive: (e) => e.isActive('heading', { level: 3 }),
    action: (e) => e.chain().focus().toggleHeading({ level: 3 }).run(),
  },
  {
    group: 'block',
    label: 'H4',
    title: 'Heading 4',
    isActive: (e) => e.isActive('heading', { level: 4 }),
    action: (e) => e.chain().focus().toggleHeading({ level: 4 }).run(),
  },
  {
    group: 'list',
    label: '• List',
    title: 'Bullet list',
    isActive: (e) => e.isActive('bulletList'),
    action: (e) => e.chain().focus().toggleBulletList().run(),
  },
  {
    group: 'list',
    label: '1. List',
    title: 'Ordered list',
    isActive: (e) => e.isActive('orderedList'),
    action: (e) => e.chain().focus().toggleOrderedList().run(),
  },
  {
    group: 'list',
    label: '"',
    title: 'Quote',
    isActive: (e) => e.isActive('blockquote'),
    action: (e) => e.chain().focus().toggleBlockquote().run(),
  },
];

function promptLink(editor: Editor) {
  const previous = editor.getAttributes('link').href as string | undefined;
  const url = window.prompt('Link URL (empty to unlink):', previous ?? '');
  if (url === null) return;
  if (url === '') {
    editor.chain().focus().extendMarkRange('link').unsetLink().run();
    return;
  }
  editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
}

export default function Toolbar({
  editor,
  onInsertImage,
}: {
  editor: Editor | null;
  onInsertImage?: () => void;
}) {
  if (!editor) return null;

  const buttonsWithDividers = BUTTONS.map((btn, i) => ({
    btn,
    showDivider: i > 0 && BUTTONS[i - 1].group !== btn.group,
  }));

  return (
    <div className="flex flex-wrap items-center gap-1 rounded-t-lg border border-b-0 border-gray-200 bg-white px-2 py-1.5 dark:border-gray-800 dark:bg-gray-950">
      {buttonsWithDividers.map(({ btn, showDivider }) => {
        return (
          <span key={btn.label} className="flex items-center">
            {showDivider && (
              <span className="mx-1 h-5 w-px bg-gray-200 dark:bg-gray-700" />
            )}
            <button
              type="button"
              title={btn.title}
              onClick={() => btn.action(editor)}
              className={`min-w-7 rounded px-2 py-1 text-xs font-medium transition-colors ${
                btn.isActive(editor)
                  ? 'bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900'
                  : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
              }`}
            >
              {btn.label}
            </button>
          </span>
        );
      })}
      <span className="mx-1 h-5 w-px bg-gray-200 dark:bg-gray-700" />
      <button
        type="button"
        title="Link"
        onClick={() => promptLink(editor)}
        className={`min-w-7 rounded px-2 py-1 text-xs font-medium transition-colors ${
          editor.isActive('link')
            ? 'bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900'
            : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
        }`}
      >
        Link
      </button>
      {onInsertImage && (
        <>
          <span className="mx-1 h-5 w-px bg-gray-200 dark:bg-gray-700" />
          <button
            type="button"
            title="Insert image"
            onClick={onInsertImage}
            className="rounded px-2 py-1 text-xs font-medium text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
          >
            Image
          </button>
        </>
      )}
    </div>
  );
}
