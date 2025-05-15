import { HomePageWelcomeDescription, HomePageWelcomeTitle } from 'components/AboutUs/AboutUs.styled';
import SocialNetworkLinks from 'components/SocialSideBar';
import Image from 'next/image';
import React from 'react';
import { Flex, MarginBox } from 'UI';
import { useLarge } from 'utils/useBreakpoint';

const WelcomeAboutUs = () => {
  const large = useLarge();
  return (
    <Flex direction={'column'} maxWidth={large ? 1200 : 900} align={'center'}>
      {/*<SignInButton />*/}
      <Flex direction={large ? 'row' : 'column-reverse'}>
        <Flex align={large ? 'flex-start' : 'center'} direction={'column'} justify={'space-evenly'} maxWidth={900}>
          <HomePageWelcomeTitle>Ahoj dobrodruh. Vitaj na našom travel blogu!</HomePageWelcomeTitle>
          <Flex align={large ? 'flex-start' : 'center'}>
            <HomePageWelcomeDescription>
              Voláme sa Liv a Dan, sme mladý pár zo Slovenska s vášňou pre cestovanie, fotografovanie a dobrodružstvo.
              Na našom blogu a sociálnych sieťach zdieľame autentické zážitky z ciest a inšpirujeme ostatných, že
              cestovať sa dá jednoducho a lacno.
            </HomePageWelcomeDescription>
          </Flex>
          <Flex justify={'center'} align={'center'} minWidth={'100%'}>
            <SocialNetworkLinks outlined />
          </Flex>
        </Flex>
        <MarginBox mr={16} />
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
            alt="Liv a Dan"
            src="/static/images/photosFull/AboutUs2.jpg"
          />
        </Flex>
      </Flex>
      {/*<MarginBox mt={32} />*/}
    </Flex>
  );
};

export default WelcomeAboutUs;
