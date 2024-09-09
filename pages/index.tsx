import BlogCardsView from 'components/BlogCardsView';
import Page from 'components/Page';
import SocialNetworkLinks from 'components/SocialSideBar';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import { HomePageWelcomeDescription, HomePageWelcomeTitle } from 'styles/AboutUs.styled';
import { Flex } from 'UI/Flex';
import Loader from 'UI/Loader';
import { MarginBox } from 'UI/MarginBox';
import { useExtraLarge } from 'utils/useBreakpoint';
import { useGetArticles } from 'utils/useGetArticles';

export default function Home() {
  const xl = useExtraLarge();
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
        <Flex direction={'column'}>
          {/*<SignInButton />*/}
          <Flex direction={xl ? 'row' : 'column-reverse'}>
            <Flex align={'center'} direction={'column'} justify={'space-evenly'}>
              <Flex align={'center'}>
                <HomePageWelcomeTitle>Ahoj dobrodruh. Vitaj na našom travel blogu!</HomePageWelcomeTitle>
              </Flex>
              <Flex align={'flex-start'}>
                <HomePageWelcomeDescription>
                  Voláme sa Liv a Dan, sme mladý pár zo Slovenska s vášňou pre cestovanie, fotografovanie a
                  dobrodružstvo. Na našom blogu a sociálnych sieťach zdieľame autentické zážitky z ciest a inšpirujeme
                  ostatných, že cestovať sa dá jednoducho a lacno.
                </HomePageWelcomeDescription>
              </Flex>
              <Flex align={'flex-start'}>
                <SocialNetworkLinks position={'relative'} outlined />
              </Flex>
            </Flex>
            <MarginBox mr={16} />
            <Flex align={'center'} justify={'center'} maxWidth={xl ? '30vw' : '100vw'}>
              <Image
                width={400}
                height={400}
                style={{
                  width: xl ? '30vw' : '50vw',
                  height: xl ? '30vw' : '50vw',
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
