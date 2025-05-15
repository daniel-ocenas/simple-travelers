import WelcomeAboutUs from 'components/AboutUs';
import BlogCardsView from 'components/BlogCardsView';
import Page from 'components/Page';
import Head from 'next/head';
import React from 'react';
import Loader from 'UI/Loader';
import { MarginBox } from 'UI/MarginBox';
import { useGetArticles } from 'utils/useGetArticles';

export default function Home() {
  const { isLoading, articlesList } = useGetArticles({ maxCount: 6 });
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
        <WelcomeAboutUs />
        <MarginBox mt={16} />
        {isLoading ? <Loader /> : <BlogCardsView articles={articlesList} />}
      </Page>
    </>
  );
}
