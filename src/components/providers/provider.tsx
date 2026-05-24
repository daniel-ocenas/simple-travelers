'use client';

import { ThemeProvider } from 'next-themes';

import ReduxProvider from '@/components/providers/redux-provider';

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute={'class'}
      defaultTheme={'system'}
      enableSystem
      disableTransitionOnChange
    >
      <ReduxProvider>{children}</ReduxProvider>
    </ThemeProvider>
  );
}
