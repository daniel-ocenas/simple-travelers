import React from 'react';

type Size = 'sm' | 'md' | 'lg';

const BASE =
  'cursor-pointer rounded-md border border-gray-300 bg-white outline-none transition-colors focus:border-gray-500 dark:border-gray-700 dark:bg-gray-950';

// Fixed heights (border-box includes the 1px border) so a bordered <select>
// lines up with the borderless Button next to it: md = 32px, matching `size="md"`.
const SIZES: Record<Size, string> = {
  sm: 'h-6 px-2 text-xs',
  md: 'h-8 px-3 text-sm',
  lg: 'h-9 px-3 text-base',
};

export type SelectProps = Omit<React.ComponentProps<'select'>, 'size'> & {
  selectSize?: Size;
};

/**
 * Themed native `<select>`. `selectSize` picks the padding/text scale (`md`
 * default); pass `<option>`s as children. `className` is appended for additions
 * like `w-full`.
 */
export default function Select({
  selectSize = 'md',
  className = '',
  children,
  ...props
}: SelectProps) {
  return (
    <select className={`${BASE} ${SIZES[selectSize]} ${className}`} {...props}>
      {children}
    </select>
  );
}
