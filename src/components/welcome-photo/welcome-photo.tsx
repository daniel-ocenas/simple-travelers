'use client';

import Image from 'next/image';
import React from 'react';

import { useMedium } from '@/hooks/use-breakpoint';

const IMAGE_BLUR_DATA =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAKCAYAAACJxx+AAAABPUlEQVR4AQzHzSuDcQDA8a/fM/KaEXtBhqQwJi8l7eDgQOHA0VVuKxe5rJxc/AcrjZaD3XBxtZZYu8i2MpvRRjbPM2WZ9v54Dp++fcWmR1FXT2V15URWl92yuqZ1wyOrW2eKuuNVVGEzSMwYdExrZow6prSf6NIx2i0x3Ckhxo0Cq1lg00xqrGYJq6mOMYNgRCMs7SV6WosM6CsMdlSwGmq0S3mMbSU6moqIePyFt1icYCRKOJrAeX7PxV2Ip+cEkVgSsXfpZ/vqlt3QF4FYArmq4PKHcRxfc+S9QXzO2inY5qm06HkN+lBzv1TnZvlbsJMcHUc0Pgbo/06xzgddfSZGTE0skWasLkcrFYR76AeX+Z2DoTL7dgsOS43FlA9nQ5TDhgfEYK8ZfUsztXJBUyadyZBVZKr5LPW5LP8AAAD//w76le4AAAAGSURBVAMAOPh7ddSOvMYAAAAASUVORK5CYII=';

const PHOTO_HEIGHT = 500;

const WelcomePhoto = () => {
  const medium = useMedium();
  const backgroundImage = `/static/images/${
    medium ? 'Background.jpg' : 'BackgroundSmall.jpg'
  }`;

  return (
    <div
      className="absolute right-0 top-0 -z-10 h-[500px] w-full"
      style={{ height: `${PHOTO_HEIGHT}px` }}
    >
      <div className="relative h-[500px] w-full">
        <Image
          alt="welcome-photo"
          src={backgroundImage}
          className="absolute object-cover"
          sizes="100vw"
          quality={75}
          placeholder="blur"
          blurDataURL={IMAGE_BLUR_DATA}
          fetchPriority={'high'}
          fill
        />
      </div>
      <div className="welcome-photo-divider absolute top-[406px] h-[104px] w-full overflow-y-hidden">
        <Image
          alt="welcome-photo-divider"
          src="/static/images/BackgroundDivider2.png"
          sizes="100vw"
          fetchPriority={'high'}
          fill
        />
      </div>
    </div>
  );
};

export default WelcomePhoto;
