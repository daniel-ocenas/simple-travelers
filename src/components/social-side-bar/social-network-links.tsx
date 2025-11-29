'use client';

import React from 'react';

import { useTheme } from 'next-themes';

import SocialItem from '@/components/social-side-bar/social-item';
import useMounted from '@/hooks/use-mounted';


const SocialNetworkLinks = ({ outlined }: { outlined?: boolean }) => {
  const { theme } = useTheme();
  const mounted = useMounted();

  if (!mounted) return null;

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
        alt={'facebook'}
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
