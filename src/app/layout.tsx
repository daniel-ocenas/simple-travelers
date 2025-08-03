import { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import Head from 'next/head';
import React from 'react';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Provider from '@/components/Providers/Provider';
import ScrollToTop from '@/components/ScrollToTop';
import WelcomePhoto from '@/components/WelcomePhoto';
import '@/styles/globals.css';

const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito',
});

export const metadata: Metadata = {
  title: {
    default: 'Simple Travelers',
    template: '%s | Simple Travelers',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sk" className="scrollbar overflow-y-scroll">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body
        className={`text-primary bg-primary scrollbar flex flex-col ${nunito.variable} font-nunito`}
      >
        <Provider>
          <WelcomePhoto />
          <Header />
          <div className="mx-auto mt-[340px] w-full max-w-screen-xl px-[10vw] md:px-[5vw]">
            <main>{children}</main>
          </div>
          <div className="fixed bottom-12 right-10">
            <ScrollToTop />
          </div>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
