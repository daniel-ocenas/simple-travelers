import React from 'react';

const BASE =
  'w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none transition-colors focus:border-gray-500 dark:border-gray-700 dark:bg-gray-950';

export type TextareaProps = React.ComponentProps<'textarea'>;

/** Themed multiline input, matching `Input`'s border styling. */
export default function Textarea({ className = '', ...props }: TextareaProps) {
  return <textarea className={`${BASE} ${className}`} {...props} />;
}
