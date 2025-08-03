'use client';

import ReduxProvider from '@/components/providers/redux-provider';
import { ThemeProvider } from 'next-themes';

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class">
      <ReduxProvider>{children}</ReduxProvider>
    </ThemeProvider>
  );
}
