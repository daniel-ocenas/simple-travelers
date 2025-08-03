'use client';

import React from 'react';

import { useTheme } from 'next-themes';

import SocialItem from '@/components/social-side-bar/social-item';


const SocialNetworkLinks = ({ outlined }: { outlined?: boolean }) => {
  const { theme } = useTheme();

  return (
    <div className={`flex items-center gap-2`}>
      <SocialItem
        href={'https://www.instagram.com/simple.travelers'}
        icon={`/static/icons/instagram${
          theme === 'dark' || !outlined ? '' : '-outline'
        }.png`}
        alt={'instagram'}
      />
      <SocialItem
        href={'https://www.facebook.com/WeAreSimpleTravelers'}
        icon={`/static/icons/facebook${
          theme === 'dark' || !outlined ? '' : '-outline'
        }.png`}
        alt={'instagram'}
      />
      <SocialItem
        href={'https://www.tiktok.com/@simple_travelers'}
        icon={`/static/icons/tiktok${
          theme === 'dark' || !outlined ? '' : '-outline'
        }.png`}
        alt={'tiktok'}
      />
    </div>
  );
};

export default SocialNetworkLinks;
