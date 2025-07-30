import Head from 'next/head';
import React from 'react';
import AboutUs from 'src/components/AboutUs';
import BlogCardsView from 'src/components/BlogCardsView';
import CustomPage from 'src/components/CustomPage';
import { WithSidebar } from 'src/components/SideBar/SideBar';
import { Flex, MarginBox } from 'src/UI';

export default function Page() {
  return (
    <>
      <Head>
        <meta name="description" content="Cestovateľský blog, ktorý nakopne Tvoju chuť objavovať svet." />
        <meta property="og:title" content="Simple Travelers, cestovateľský blog" />
        <meta property="og:description" content="Cestovateľský blog, ktorý nakopne Tvoju chuť objavovať svet." />
        <meta property="og:image" content="https://simpletravelers.sk/static/images/photosFull/Background.jpg" />
        <meta property="og:url" content="https://simpletravelers.sk/" />
        <meta property="og:type" content="article" />
        <meta
          name="keywords"
          content="cestovateľský blog, erasmus, roadtripy, lacné cestovanie, cestovanie bez cestovky, dialkova turistika, thru-hiking, turistikovanie, hiking"
        />
      </Head>
      <CustomPage>
        <Flex direction={'column'} align={'center'}>
          <AboutUs />
          <MarginBox mt={64} />
          <WithSidebar>
            <BlogCardsView maxCount={3} header={'Najnovšie články'} />
          </WithSidebar>
        </Flex>
      </CustomPage>
    </>
  );
}
