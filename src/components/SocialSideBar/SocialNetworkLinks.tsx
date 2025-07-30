'use client';
import Image from 'next/image';
import React from 'react';
import { SSocialNetworkLinks } from 'src/components/SocialSideBar/SocialNetworkLinks.styled';
import { Link } from 'src/UI';

const SocialNetworkLinks = ({
  outlined,
  top,
  right,
  position,
}: {
  outlined?: boolean;
  top?: number;
  right?: number;
  position?: string;
}) => {
  return (
    <SSocialNetworkLinks $top={top} $right={right} $position={position}>
      <Link href={'https://www.instagram.com/simple.travelers'} external newTab passHref>
        <Image
          className={'image'}
          src={`/static/icons/instagram${outlined ? '-outline' : ''}.png`}
          alt={'instagram'}
          width={40}
          height={40}
        />
      </Link>
      <Link href={'https://www.facebook.com/WeAreSimpleTravelers'} external newTab passHref>
        <Image
          className={'image'}
          src={`/static/icons/facebook${outlined ? '-outline' : ''}.png`}
          alt={'facebook'}
          width={40}
          height={40}
        />
      </Link>
      <Link href={'https://www.tiktok.com/@simple_travelers'} external newTab passHref>
        <Image
          className={'image'}
          src={`/static/icons/tiktok${outlined ? '-outline' : ''}.png`}
          alt={'tiktok'}
          width={40}
          height={40}
        />
      </Link>
    </SSocialNetworkLinks>
  );
};

export default SocialNetworkLinks;
