import NextLink from 'next/link';
import React from 'react';

type Variant = 'plain' | 'nav' | 'muted';

const VARIANTS: Record<Variant, string> = {
  // No styling — wraps next/link so the app has one Link import to reach for.
  plain: '',
  // Header / inline navigation links.
  nav: 'text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100',
  // Small secondary links ("← back", breadcrumbs).
  muted:
    'text-sm text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100',
};

export type LinkProps = React.ComponentProps<typeof NextLink> & {
  variant?: Variant;
};

/**
 * Themed wrapper around `next/link`. Pass `variant` for the shared link looks;
 * `className` is appended for layout-only additions. For button-styled CTAs use
 * `buttonClasses()` from `@/ui/button` instead.
 */
export default function Link({
  variant = 'plain',
  className = '',
  ...props
}: LinkProps) {
  return (
    <NextLink
      className={`${VARIANTS[variant]} ${className}`.trim()}
      {...props}
    />
  );
}
