import Head from 'next/head';
import { Flex } from 'UI/Flex/Flex';
import { MarginBox } from 'UI/MarginBox';

function Videos() {
  return (
    <div className="page">
      <Head>
        <title>Videá</title>
        <meta property="og:title" content="Videá" />
        <meta property="og:description" content="Videá cestovateľského blogu Simple Travelers" />
        <meta name="description" content="Videá cestovateľského blogu Simple Travelers" />
        <meta property="og:image" content="https://simpletravelers.sk/images/photosFull/ZionAngelsLanding.jpg" />
        <meta property="og:url" content="https://simpletravelers.sk/videa" />
        <meta name="keywords" content="video, videos" />
      </Head>
      <Flex direction={'column'} justify={'center'}>
        <iframe
          src="https://www.youtube.com/embed/DujsK0pmo_o?si=1RM-ke-QdVcV8Sjv"
          title="Cestovanie a turistika po Gruzínsku"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
        <MarginBox mt={16} />
        <iframe
          src="https://www.youtube.com/embed/s-9kaJvCJ9E"
          title="Slovakia beyond the Arctic Circle, Erasmus 2019"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </Flex>
    </div>
  );
}

export default Videos;
