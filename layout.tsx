import ScrollToTopButton from 'components/ScrollToTopButton';
import SideBar from 'components/SideBar';
import WelcomePhoto from 'components/WelcomePhoto';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Script from 'next/script';
import React, { useEffect } from 'react';

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
  const router = useRouter();

  useEffect(() => {
    // function to get the current page url and pass it to gtag pageView() function
    const handleRouteChange = (url: string) => {
      gtag.pageView(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    router.events.on('hashChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
      router.events.off('hashChangeComplete', handleRouteChange);
    };
  }, [router.events]);
  return (
    <>
      <Head>
        <link rel={'manifest'} href={'/manifest.json'} />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`} />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
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
      <WelcomePhoto />
      <Header />
      <ScrollToTopButton />
      <SideBar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
