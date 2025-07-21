import AboutUs from 'components/AboutUs';
import BlogCardsView from 'components/BlogCardsView';
import Page from 'components/Page';
import { WithSidebar } from 'components/SideBar/SideBar';
import Head from 'next/head';
import React from 'react';
import { Flex, Loader, MarginBox, Text } from 'UI';
import { useGetArticles } from 'utils/useGetArticles';

export default function Home() {
  const { isLoading, articlesList } = useGetArticles({ maxCount: 3 });
  return (
    <>
      <Head>
        <title>Simple Travelers, cestovateľský blog</title>
        <meta property="og:title" content="Simple Travelers" />
        <meta property="og:description" content="Cestovateľský blog, ktorý nakopne Tvoju chuť objavovať svet." />
        <meta name="description" content="Cestovateľský blog, ktorý nakopne Tvoju chuť objavovať svet." />
        <meta property="og:image" content="https://simpletravelers.sk/static/images/photosFull/ZionAngelsLanding.jpg" />
        <meta property="og:url" content="https://simpletravelers.sk/" />
        <meta property="og:type" content="article" />
        <meta
          name="keywords"
          content="cestovateľský blog, cestuj po svete, erasmus, roadtrip, lacné cestovanie, cestovanie bez cestovky"
        />
      </Head>
      <Page>
        <Flex direction={'column'} align={'center'}>
          <AboutUs />
          <MarginBox mt={64} />
          <WithSidebar>
            <Flex direction={'column'}>
              <Text type={'h6'}>Najnovšie články</Text>
              {isLoading ? <Loader /> : <BlogCardsView articles={articlesList} />}
            </Flex>
          </WithSidebar>
        </Flex>
      </Page>
    </>
  );
}
