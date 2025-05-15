import Page from 'components/Page';
import { WithSidebar } from 'components/SideBar/SideBar';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import React from 'react';

const NoSSRGallery = dynamic(() => import('../components/Gallery'), { ssr: false });

export default function Galeria() {
  return (
    <>
      <Head>
        <title>Galéria, Simple Travelers</title>
        <meta property="og:title" content="Simple Travelers - Galéria" />
        <meta
          property="og:description"
          content="Prehliadni si výber našich najlepších fotiek z cestovania po celom svete."
        />
        <meta name="description" content="Prehliadni si výber našich najlepších fotiek z cestovania po celom svete." />
        <meta property="og:image" content="https://simpletravelers.sk/static/images/photosFull/ZionAngelsLanding.jpg" />
        <meta property="og:url" content="https://simpletravelers.sk/galeria" />
        <meta property="og:type" content="article" />
        <link rel="canonical" href="https://simpletravelers.sk/galeria" />
        <meta name="keywords" content="" />
      </Head>
      <Page>
        <WithSidebar>
          <NoSSRGallery />
        </WithSidebar>
      </Page>
    </>
  );
}
