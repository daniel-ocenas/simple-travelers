import React from 'react';

type Variant = 'error' | 'success';

const VARIANTS: Record<Variant, string> = {
  error:
    'border-red-200 bg-red-50 text-red-700 dark:border-red-900 dark:bg-red-950/40 dark:text-red-300',
  success:
    'border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-300',
};

/** Inline status banner for form feedback (error / success). */
export default function Alert({
  variant = 'error',
  className = '',
  children,
}: {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <p
      className={`rounded-md border px-3 py-2 text-sm ${VARIANTS[variant]} ${className}`}
    >
      {children}
    </p>
  );
}
