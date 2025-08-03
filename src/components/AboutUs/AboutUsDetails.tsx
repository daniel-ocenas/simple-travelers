'use client';

import Image from 'next/image';
import React from 'react';

import { useTheme } from 'next-themes';

import { useMedium } from '@/hooks/useBreakpoint';


const AboutUsItem = ({
  text,
  icon,
  size = 32,
}: {
  text: React.ReactNode;
  icon: string;
  size?: number;
}) => {
  const { theme } = useTheme();
  return (
    <div className="flex flex-row items-center justify-center">
      <Image
        src={`/static/icons/${theme === 'dark' ? icon + '-white' : icon}.svg`}
        alt={icon}
        width={size}
        height={size}
      />
      <div className="mr-4" />
      <span className="text-lg">{text}</span>
    </div>
  );
};

const AboutUsDetails = () => {
  const medium = useMedium();

  return (
    <div className="my-4">
      <div
        className={`flex items-center justify-center ${
          medium ? 'flex-row' : 'flex-col'
        }`}
      >
        <AboutUsItem
          text={
            <>
              Nakráčaných <b>5000km +</b>
            </>
          }
          icon={'footprints'}
          size={36}
        />
        <div className="max-w-4 mx-2">
          <div className={`bg-gray-400 ${medium ? 'h-8 w-px' : 'h-px w-8'}`} />
        </div>
        <AboutUsItem
          text={
            <>
              <b>969</b> Sledovateľov
            </>
          }
          icon={'group'}
        />
        <div className="max-w-4 mx-2">
          <div className={`bg-gray-400 ${medium ? 'h-8 w-px' : 'h-px w-8'}`} />
        </div>
        <AboutUsItem
          text={
            <>
              Navštívených <b>41</b> krajín
            </>
          }
          icon={'globe'}
          size={28}
        />
      </div>
    </div>
  );
};

export default AboutUsDetails;
