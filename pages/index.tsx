import BlogCardsView from 'components/BlogCardsView';
import Page from 'components/Page';
import SocialNetworkLinks from 'components/SocialSideBar';
import { ArticleProps, ArticlesList, sortArticlesByDate } from 'data/ArticlesList';
import Head from 'next/head';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { HomePageWelcomeDescription, HomePageWelcomeTitle } from 'styles/AboutUs.styled';
import { Flex } from 'UI/Flex';
import Loader from 'UI/Loader';
import { MarginBox } from 'UI/MarginBox';
import { useLarge } from 'utils/useBreakpoint';

export default function Home() {
  const large = useLarge();
  const [articlesList, setArticlesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await fetch(`https://simpletravelers.sk/api/articles`).catch((e) => {
        return undefined;
      });

      let data = await response?.json();
      if (response?.status !== 200) {
        data = {
          articleList: sortArticlesByDate(ArticlesList.slice(0, 6) as ArticleProps[]),
        };
      }

      let sortedArticleList = data?.articleList?.sort((a: any, b: any) => {
        const start = +new Date(b.dateCreated);
        return start - +new Date(a.dateCreated);
      });

      setIsLoading(false);
      setArticlesList(sortedArticleList ?? []);
      return data;
    };

    fetchArticles();
  }, []);

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
        <Flex direction={'column'}>
          <Flex direction={large ? 'row' : 'column-reverse'}>
            <Flex align={'center'} direction={'column'}>
              <HomePageWelcomeTitle>Ahoj dobrodruh. Vitaj na našom travel blogu!</HomePageWelcomeTitle>
              <HomePageWelcomeDescription>
                Voláme sa Liv a Dan, sme mladý pár zo Slovenska s vášňou pre cestovanie, fotografovanie a dobrodružstvo.
                Na našom blogu a sociálnych sieťach zdieľame autentické zážitky z ciest a inšpirujeme ostatných, že
                cestovať sa dá jednoducho a lacno.
              </HomePageWelcomeDescription>
              <Flex align={'center'}>
                <SocialNetworkLinks position={'relative'} outlined />
              </Flex>
            </Flex>
            <MarginBox mr={16} />
            <Flex align={'center'} justify={'center'} maxWidth={large ? '25vw' : '100vw'}>
              <Image
                width={400}
                height={400}
                style={{
                  width: large ? '25vw' : '50vw',
                  height: large ? '25vw' : '50vw',
                  objectFit: 'cover',
                  borderRadius: '50%',
                  alignContent: 'center',
                }}
                alt="Liv a Dan"
                src="/static/images/photosFull/AboutUs2.jpg"
              />
            </Flex>
          </Flex>
          <MarginBox mt={64} />
        </Flex>
        <MarginBox mt={16} />
        {isLoading ? <Loader /> : <BlogCardsView articles={articlesList} />}
      </Page>
    </>
  );
}
