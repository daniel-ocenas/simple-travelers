'use client';
import Image from 'next/image';
import React from 'react';
import { HomePageWelcomeDescription, HomePageWelcomeTitle } from 'src/components/AboutUs/AboutUs.styled';
import AboutUsDetails from 'src/components/AboutUs/AboutUsDetails';
import SocialNetworkLinks from 'src/components/SocialSideBar';
import { Flex, MarginBox } from 'src/UI';
import { useLarge, useMedium } from 'src/utils/useBreakpoint';

const AboutUs = () => {
  const large = useLarge();
  const medium = useMedium();
  return (
    <Flex direction={'column'} maxWidth={large ? 1200 : medium ? 900 : 300} align={'center'}>
      <Flex direction={large ? 'row' : 'column-reverse'} align={'center'}>
        <Flex align={large ? 'flex-start' : 'center'} direction={'column'} justify={'space-evenly'} maxWidth={900}>
          <HomePageWelcomeTitle>Ahoj dobrodruh. Vitaj na našom travel blogu!</HomePageWelcomeTitle>
          <Flex align={large ? 'flex-start' : 'center'}>
            <HomePageWelcomeDescription>
              Voláme sa Liv a Dan, sme mladý pár zo Slovenska s vášňou pre cestovanie, fotografovanie a dobrodružstvo.
              Na našom blogu a sociálnych sieťach zdieľame autentické zážitky z ciest a inšpirujeme ostatných, že
              cestovať sa dá jednoducho a lacno.
            </HomePageWelcomeDescription>
          </Flex>
          <Flex direction={'column'} justify={'center'} align={'center'} minWidth={'100%'}>
            <AboutUsDetails />
            <SocialNetworkLinks outlined />
          </Flex>
        </Flex>
        <MarginBox mr={16} />
        {large && (
          <Flex align={'center'} justify={'center'} maxWidth={large ? '300px' : '100vw'}>
            <Image
              width={250}
              height={250}
              style={{
                objectFit: 'cover',
                borderRadius: '50%',
                alignContent: 'center',
                zIndex: 1,
              }}
              alt={'Liv a Dan'}
              src={'/static/images/photosFull/AboutUs2.jpg'}
            />
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};

export default AboutUs;
