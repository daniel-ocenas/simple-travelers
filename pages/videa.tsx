import Page from 'components/Page';
import { WithSidebar } from 'components/SideBar/SideBar';
import { Video } from 'components/Video/Video';
import Head from 'next/head';
import React from 'react';
import { Flex, MarginBox } from 'UI';

export default function Videos() {
  return (
    <>
      <Head>
        <title>Videá, Simple Travelers</title>
        <meta property="og:title" content="Videá, Simple Travelers" />
        <meta property="og:description" content="Videá cestovateľského blogu Simple Travelers" />
        <meta name="description" content="Videá cestovateľského blogu Simple Travelers" />
        <meta property="og:image" content="https://simpletravelers.sk/static/images/photosFull/ZionAngelsLanding.jpg" />
        <meta property="og:url" content="https://simpletravelers.sk/videa" />
        <meta property="og:type" content="article" />
        <meta name="keywords" content="video, videos, travel videos, hiking videos" />
      </Head>
      <Page>
        <WithSidebar>
          <Flex direction={'column'}>
            <Video
              src="https://www.youtube.com/embed/ixmHwvUFBiU?si=Oi4ceeV_BSWuGNiv"
              title="Bali treba jednoducho zažiť"
            />
            <MarginBox mt={16} />
            <Video
              src="https://www.youtube.com/embed/DujsK0pmo_o?si=1RM-ke-QdVcV8Sjv"
              title="Cestovanie a turistika po Gruzínsku"
            />
            <MarginBox mt={16} />
            <Video
              src="https://www.youtube.com/embed/s-9kaJvCJ9E"
              title="Slovakia beyond the Arctic Circle, Erasmus 2019"
            />
          </Flex>
        </WithSidebar>
      </Page>
    </>
  );
}
