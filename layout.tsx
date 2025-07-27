import ScrollToTopButton from 'components/ScrollToTopButton';
import WelcomePhoto from 'components/WelcomePhoto';
import Head from 'next/head';
import Script from 'next/script';
import React from 'react';

import * as gtag from 'utils/gtag';
import Footer from './components/Footer';
import Header from './components/Header';

declare global {
  interface Window {
    dataLayer: any;
    gtag: any;
  }
}

export default function Layout({ children }: { children: any }) {
  return (
    <>
      <Head>
        <title>Simple Travelers, cestovateľský blog</title>
        <link rel={'manifest'} href={'/manifest.json'} />
        <meta name={'theme-color'} content={'#ffffff'} />
      </Head>
      <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`} />
      <Script
        id={'gtag-init'}
        strategy={'afterInteractive'}
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gtag.GA_TRACKING_ID}', {
            page_path: window.location.pathname
          });`,
        }}
      />
      <Header />
      <WelcomePhoto />
      <ScrollToTopButton />
      <main>{children}</main>
      <Footer />
    </>
  );
}
