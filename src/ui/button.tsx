import React from 'react';

type Variant = 'primary' | 'secondary' | 'ghost' | 'danger';
type Size = 'xs' | 'sm' | 'md' | 'lg';

const BASE =
  'inline-flex items-center justify-center rounded-md font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 dark:focus-visible:ring-gray-600';

const VARIANTS: Record<Variant, string> = {
  primary:
    'bg-gray-900 text-white hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-white',
  secondary:
    'border border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-900',
  ghost:
    'text-gray-500 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800',
  danger:
    'text-gray-400 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950/40',
};

const SIZES: Record<Size, string> = {
  xs: 'px-1.5 py-0.5 text-xs',
  sm: 'px-2 py-1 text-xs',
  md: 'px-3 py-1.5 text-sm',
  lg: 'px-4 py-2 text-sm',
};

/**
 * Build the themed button class string. Use for `<Link>`/`<a>` CTAs that need
 * the button look but must stay navigational elements. For real buttons, use
 * the `Button` component below.
 */
export function buttonClasses(opts?: {
  variant?: Variant;
  size?: Size;
  className?: string;
}): string {
  const { variant = 'primary', size = 'md', className = '' } = opts ?? {};
  return `${BASE} ${VARIANTS[variant]} ${SIZES[size]} ${className}`.trim();
}

export type ButtonProps = React.ComponentProps<'button'> & {
  variant?: Variant;
  size?: Size;
};

/**
 * Themeable button primitive for the admin UI. Pass `variant`/`size` for the
 * shared look; `className` is appended for layout-only additions (e.g.
 * `w-full`, `mt-2`) — it does NOT override variant colors (no tailwind-merge).
 * Defaults to `type="button"`; pass `type="submit"` for form submits.
 */
export default function Button({
  variant = 'primary',
  size = 'md',
  type = 'button',
  className = '',
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={buttonClasses({ variant, size, className })}
      {...props}
    />
  );
}
