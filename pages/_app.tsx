import Layout from 'layout';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import '../styles/burger-menu.scss';
import '../styles/slider.css';
import '../styles/styles.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/png" sizes="72x72" href="/icons/icon-72x72.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/icons/icon-96x96.png" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
