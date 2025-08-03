'use client';

// import SocialNetworkLinks from 'src/components/SocialSideBar';
import Image from 'next/image';
import React from 'react';

import AboutUsDetails from './AboutUsDetails';
import SocialNetworkLinks from '@/components/SocialSideBar/SocialNetworkLinks';
import { useLarge } from '@/hooks/useBreakpoint';

const AboutUs = () => {
  const large = useLarge();

  return (
    <div
      className={`text-primary flex items-center dark:text-white ${
        large ? 'flex-row' : 'flex-col-reverse'
      }`}
    >
      <div
        className={`flex max-w-[750px] flex-col ${
          large ? 'items-start' : 'items-center'
        }`}
      >
        <h1
          className={`mb-4 text-3xl font-bold ${
            large ? 'text-left' : 'text-center'
          }`}
        >
          Ahoj dobrodruh. Vitaj na našom travel blogu!
        </h1>
        <div
          className={`flex ${
            large ? 'items-start text-left' : 'items-center text-center'
          }`}
        >
          <p className=" text-lg leading-relaxed">
            Voláme sa Liv a Dan, sme mladý pár zo Slovenska s vášňou pre
            cestovanie, fotografovanie a dobrodružstvo. Na našom blogu a
            sociálnych sieťach zdieľame autentické zážitky z ciest a inšpirujeme
            ostatných, že cestovať sa dá jednoducho a lacno.
          </p>
        </div>
        <div className="size- flex w-full flex-col items-center justify-center">
          <AboutUsDetails />
          <SocialNetworkLinks outlined />
        </div>
      </div>
      <div className="mr-16" />
      {large && (
        <div
          className={`flex items-center justify-center ${
            large ? 'max-w-[300px]' : 'max-w-screen'
          }`}
        >
          <Image
            width={300}
            height={300}
            className="z-[1] rounded-full object-cover"
            alt={'Liv a Dan'}
            src={'/static/images/photosFull/AboutUs2.jpg'}
          />
        </div>
      )}
    </div>
  );
};

export default AboutUs;
