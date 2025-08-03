'use client';

// import SocialNetworkLinks from 'src/components/SocialSideBar';
import Image from 'next/image';
import React from 'react';

import AboutDetails from './about-details';
import SocialNetworkLinks from '@/components/social-side-bar/social-network-links';
import { useLarge } from '@/hooks/use-breakpoint';

const About = () => {
  const large = useLarge();

  return (
    <div
      className={`text-primary flex items-center justify-between gap-4 dark:text-white ${
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
          <AboutDetails />
          <SocialNetworkLinks outlined />
        </div>
      </div>
      {large && (
        <Image
          width={300}
          height={300}
          className="z-[1] w-[300px] rounded-full object-cover"
          alt={'Liv a Dan'}
          src={'/static/images/photosFull/AboutUs2.jpg'}
        />
      )}
    </div>
  );
};

export default About;
