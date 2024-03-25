import Page from 'components/Page';
import { Video } from 'components/Video/Video';
import Head from 'next/head';
import React from 'react';
import { Flex } from 'UI/Flex/Flex';
import { MarginBox } from 'UI/MarginBox';
import { useMedium } from 'utils/useBreakpoint';

export default function Videos() {
  const medium = useMedium();
  return (
    <>
      <Head>
        <title>Videá, Simple Travelers</title>
        <meta property="og:title" content="Videá" />
        <meta property="og:description" content="Videá cestovateľského blogu Simple Travelers" />
        <meta name="description" content="Videá cestovateľského blogu Simple Travelers" />
        <meta property="og:image" content="https://simpletravelers.sk/images/photosFull/ZionAngelsLanding.jpg" />
        <meta property="og:url" content="https://simpletravelers.sk/videa" />
        <meta name="keywords" content="video, videos" />
      </Head>
      <Page>
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
      </Page>
    </>
  );
}
