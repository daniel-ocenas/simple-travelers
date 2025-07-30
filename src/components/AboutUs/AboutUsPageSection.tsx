'use client';
import Image from 'next/image';
import React from 'react';
import { HomePageWelcomeTitle } from 'src/components/AboutUs/AboutUs.styled';
import { Flex, MarginBox } from 'src/UI';
import { useLarge } from 'src/utils/useBreakpoint';

const AboutUsPageSection = () => {
  const large = useLarge();
  return (
    <Flex direction={large ? 'row' : 'column-reverse'} justify={'center'} align={'center'}>
      <Flex align={'flex-start'} direction={'column'} justify={'space-evenly'} maxWidth={650}>
        <HomePageWelcomeTitle>
          Pocit z objavovania krás, ktoré nám svet ponúka je nádherný. No sila našich dobrodružstiev spočíva práve v
          tom, že všetko prežívame spolu.
        </HomePageWelcomeTitle>
      </Flex>
      <MarginBox mr={16} />
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
        src="/static/images/photosFull/AboutUs.jpg"
      />
    </Flex>
  );
};

export default AboutUsPageSection;
