'use client';

import { ThemeProvider } from 'next-themes';

import ReduxProvider from '@/components/Providers/AppReduxProvider';

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class">
      <ReduxProvider>{children}</ReduxProvider>
    </ThemeProvider>
  );
}
