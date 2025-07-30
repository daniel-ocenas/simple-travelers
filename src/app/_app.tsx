import { ConfigProvider } from 'antd';
import skSK from 'antd/locale/sk_SK';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import type { ReactElement, ReactNode } from 'react';
import React from 'react';
import * as gtag from 'src/utils/gtag';
import Layout from './layout';

declare global {
  interface Window {
    dataLayer: any;
    gtag: any;
  }
}

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <Layout>
      <Head>
        <title>Simple Travelers, cestovateľský blog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/png" href="/static/icons/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/static/icons/favicon.svg" />
        <link rel="icon" href="/src/app/favicon.ico" sizes="any" />
        <link rel="shortcut icon" href="/src/app/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/static/icons/apple-touch-icon.png" type="image/png" />
        <meta name="apple-mobile-web-app-title" content="Simple Travelers" />
        <meta
          name="viewport"
          content="height=device-height, width=device-width, initial-scale=1.0, minimum-scale=1.0"
        />
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
      {getLayout(
        <ConfigProvider locale={skSK}>
          <Component {...pageProps} />
        </ConfigProvider>,
      )}
    </Layout>
  );
}
