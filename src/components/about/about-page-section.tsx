'use client';

import { useLarge } from '@/hooks/use-breakpoint';
import Image from 'next/image';
import React from 'react';

const AboutPageSection = () => {
  const large = useLarge();
  return (
    <div
      className={`flex ${
        large ? 'flex-row' : 'flex-col-reverse'
      } items-center justify-center`}
    >
      <div className="flex max-w-[1200px] flex-col items-start justify-evenly">
        <h1 className="text-3xl font-bold leading-tight">
          Pocit z objavovania krás, ktoré nám svet ponúka je nádherný. No sila
          našich dobrodružstiev spočíva práve v tom, že všetko prežívame spolu.
        </h1>
      </div>
      <div className="mr-16" />
      {/* Replaced MarginBox */}
      <Image
        width={250}
        height={250}
        className="z-[1] content-center rounded-full object-cover"
        alt="Liv a Dan"
        src="/static/images/photosFull/AboutUs.jpg"
      />
    </div>
  );
};

export default AboutPageSection;
