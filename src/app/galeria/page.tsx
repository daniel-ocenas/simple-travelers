import dynamic from 'next/dynamic';
import Head from 'next/head';
import React from 'react';
import CustomPage from 'src/components/CustomPage';
import { WithSidebar } from 'src/components/SideBar/SideBar';

const NoSSRGallery = dynamic(() => import('src/components/Gallery'), { ssr: false });

export default function Page() {
  return (
    <>
      <Head>
        <meta property="og:title" content="Galéria, Simple Travelers" />
        <meta
          property="og:description"
          content="Prehliadni si výber našich najlepších fotiek z cestovania po celom svete."
        />
        <meta name="description" content="Prehliadni si výber našich najlepších fotiek z cestovania po celom svete." />
        <meta property="og:text" content="CustomPage fotiek Simple Travelers" />
        <meta property="og:image" content="https://simpletravelers.sk/static/images/photosFull/Background.jpg" />
        <meta property="og:url" content="https://simpletravelers.sk/galeria" />
        <meta property="og:type" content="article" />
        <link rel="canonical" href="https://simpletravelers.sk/galeria" />
        <meta name="keywords" content="" />
      </Head>
      <CustomPage>
        <WithSidebar>
          <NoSSRGallery />
        </WithSidebar>
      </CustomPage>
    </>
  );
}
