import type { Viewport } from 'next';
import { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import React from 'react';

import Provider from '@/components/providers/provider';
import '@/styles/globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito',
});

export const metadata: Metadata = {
  metadataBase: process.env.NEXT_PUBLIC_BASE_URL
    ? new URL(process.env.NEXT_PUBLIC_BASE_URL)
    : undefined,
  title: {
    default: 'Simple Travelers',
    template: '%s | Simple Travelers',
  },
  authors: [{ name: 'Daniel Ocenas' }, { name: 'Livia Bozonova' }],
  generator: 'Next.js',
  keywords: ['cestovateľský blog', 'travel blog', 'travel', 'hiking', 'blog'],
  openGraph: {
    title: 'Simple Travelers',
    images: ['/static/images/Background.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/static/icons/favicon-192x192.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="sk"
      className="scrollbar overflow-y-scroll"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body
        className={`text-primary bg-primary scrollbar flex flex-col ${nunito.variable} font-nunito`}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
