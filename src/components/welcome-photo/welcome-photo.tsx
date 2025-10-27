'use client';

import Image from 'next/image';
import React from 'react';

import { useMedium } from '@/hooks/use-breakpoint';

const BG_PHOTO = '/static/images/Background.jpg';
const BG_PHOTO_SMALL = '/static/images/BackgroundSmall.jpg';

const WelcomePhoto = () => {
  const medium = useMedium();
  const backgroundImage = medium ? BG_PHOTO : BG_PHOTO_SMALL;

  return (
    <div className="absolute right-0 top-0 -z-10 h-[500px] w-full">
      <div className="relative h-[500px] w-full">
        <Image
          alt="welcome-photo"
          src={backgroundImage}
          className="absolute object-cover"
          sizes="100vw"
          priority
          fill
        />
      </div>
      <div className="welcome-photo-divider absolute top-[406px] h-[104px] w-full overflow-y-hidden ">
        <Image
          alt="welcome-photo-divider"
          src="/static/images/BackgroundDivider2.png"
          sizes="(max-width: 768px) 100vw, 33vw"
          priority
          fill
        />
      </div>
      {/*{!large && (*/}
      {/*  <div className="absolute left-0 right-0 top-0 pb-[3px] text-center">*/}
      {/*    <div className="m-0 text-center font-['Indie_Flower',serif] text-2xl [text-shadow:2px_3px_3px_rgba(255,255,255,0.75),-3px_3px_3px_rgba(255,255,255,0.75),1px_-3px_3px_rgba(255,255,255,0.75),-3px_-3px_3px_rgba(255,255,255,0.75)] md:text-[2em]">*/}
      {/*      <div className="flex flex-col items-center">*/}
      {/*        <div className="my-6">*/}
      {/*          <Link href="/public">*/}
      {/*            <img*/}
      {/*              className="max-h-[100px]"*/}
      {/*              alt="simple-travelers-logo"*/}
      {/*              src="/static/icons/SimpleTravelers.svg"*/}
      {/*            />*/}
      {/*          </Link>*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*)}*/}
    </div>
  );
};

export default WelcomePhoto;
