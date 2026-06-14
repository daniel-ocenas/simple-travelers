import React from 'react';

type Size = 'sm' | 'md' | 'lg';

const BASE =
  'w-full rounded-md border border-gray-300 bg-white outline-none transition-colors focus:border-gray-500 dark:border-gray-700 dark:bg-gray-950';

const SIZES: Record<Size, string> = {
  sm: 'px-2 py-1 text-xs',
  md: 'px-3 py-2 text-sm',
  lg: 'px-3 py-2 text-base',
};

export type InputProps = Omit<React.ComponentProps<'input'>, 'size'> & {
  inputSize?: Size;
};

/**
 * Themed text input. `inputSize` picks the padding/text scale (`md` default);
 * `className` is appended for additions like `shadow-sm`.
 */
export default function Input({
  inputSize = 'md',
  className = '',
  ...props
}: InputProps) {
  return (
    <input className={`${BASE} ${SIZES[inputSize]} ${className}`} {...props} />
  );
}
