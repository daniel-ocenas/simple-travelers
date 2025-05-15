'use client';
import { BubbleMenu, EditorProvider, FloatingMenu } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

// define your extension array
const extensions = [StarterKit];

const content = '<p>Hello World!</p>';

interface RichTextEditorProps {
  value?: string;
  onChange?: (text: string) => void;
  readOnly?: boolean;
  theme?: 'snow' | 'bubble' | undefined;
}

export const RichTextEditor = ({ value, onChange, readOnly, theme = 'snow' }: RichTextEditorProps) => {
  return (
    <EditorProvider extensions={extensions} content={content}>
      <FloatingMenu editor={null}>This is the floating menu</FloatingMenu>
      <BubbleMenu editor={null}>This is the bubble menu</BubbleMenu>
    </EditorProvider>
  );
};

//
// import dynamic from 'next/dynamic';
// import React, { useState } from 'react';
// // import type ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';
//
// const QuillWrapper = dynamic(
//   async () => {
//     const { default: RQ } = await import('react-quill');
//     // eslint-disable-next-line react/display-name
//     return ({ ...props }) => <RQ {...props} />;
//   },
//   {
//     ssr: false,
//   },
// ) as typeof ReactQuill;
//
// interface RichTextEditorProps {
//   value?: string;
//   onChange?: (text: string) => void;
//   readOnly?: boolean;
//   theme?: 'snow' | 'bubble' | undefined;
// }
//
// export const RichTextEditor = ({ value, onChange, readOnly, theme = 'snow' }: RichTextEditorProps) => {
//   const myColors = ['black', 'white', 'blue', 'red', 'green', '#785412', '#452632', '#856325', '#963254', '#254563'];
//
//   const modules = {
//     toolbar: [
//       [{ header: [1, 2, 3, 4, 5, 6, false] }],
//       ['bold', 'italic', 'underline', 'strike', 'blockquote'],
//       [{ align: ['right', 'center', 'justify'] }],
//       [{ list: 'ordered' }, { list: 'bullet' }],
//       ['link'],
//       [{ color: myColors }, { background: myColors }],
//     ],
//   };
//
//   const formats = [
//     'header',
//     'bold',
//     'italic',
//     'underline',
//     'strike',
//     'blockquote',
//     'list',
//     'bullet',
//     'link',
//     'color',
//     'background',
//     'align',
//   ];
//
//   const [code, setCode] = useState(value);
//   const handleProcedureContentChange = (text: string) => {
//     setCode(text);
//     onChange && onChange(text);
//   };
//
//   return (
//     <QuillWrapper
//       theme={theme}
//       readOnly={readOnly}
//       modules={modules}
//       formats={formats}
//       value={code}
//       onChange={handleProcedureContentChange}
//     />
//   );
// };
