import { ConfigProvider } from 'antd';
import skSK from 'antd/locale/sk_SK';
import dayjs from 'dayjs';
import dayJsSk from 'dayjs/locale/sk';
import Layout from 'layout';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import type { ReactElement, ReactNode } from 'react';
import React from 'react';
// import 'react-quill/dist/quill.snow.css';
import '../styles/styles.css';

dayjs.locale(dayJsSk);

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
        <link rel="shortcut icon" href="/static/icons/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/static/icons/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Simple Travelers" />
        <meta
          name="viewport"
          content="height=device-height, width=device-width, initial-scale=1.0, minimum-scale=1.0"
        />
      </Head>
      {getLayout(
        <ConfigProvider locale={skSK}>
          <Component {...pageProps} />
        </ConfigProvider>,
      )}
    </Layout>
  );
}
