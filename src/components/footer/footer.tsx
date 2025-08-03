'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React from 'react';

import { NAV_ITEMS } from '@/components/header/header';
import NavLink from '@/components/header/nav-link';
import SocialNetworkLinks from '@/components/social-side-bar';
import { useLarge } from '@/hooks/use-breakpoint';

function Footer() {
  const large = useLarge();
  const pathname = usePathname();
  const year = new Date().getFullYear();
  const links = NAV_ITEMS.filter((l) => l.header);

  return (
    <div className="bg-background relative h-[500px] w-full">
      <Image
        src={'/static/images/photosFull/NZSeftonView.jpg'}
        alt={'footer-image'}
        fetchPriority={'low'}
        className="object-cover"
        fill
      />
      <div className="welcome-photo-divider absolute bottom-[400px] h-[104px] w-full overflow-y-hidden ">
        <Image
          alt={'welcome-photo-divider'}
          src={'/static/images/BackgroundDivider.png'}
          className="object-cover"
          fetchPriority={'low'}
          fill
        />
      </div>
      <div className="relative flex w-full flex-col items-center justify-center px-4">
        <div className="size mb-8 mt-24 flex flex-col items-center text-center text-xl md:text-[32px]">
          <div>{'Cestovateľský blog,'}</div>
          <div>{'ktorý nakopne tvoju chuť objavovať svet.'}</div>
        </div>
        <ul className="flex space-x-8">
          {links.map((item, index) => (
            <li
              key={index}
              className="text-secondary hover:text-primary whitespace-nowrap py-2 text-lg font-medium transition-all duration-300"
            >
              <NavLink path={item.path}>{item.title}</NavLink>
            </li>
          ))}
        </ul>
        <div className="w-full px-4 py-8">
          <div className="flex h-[60px] flex-col items-center justify-between">
            <SocialNetworkLinks />
            <div className="mt-4" />
            <p className="text-sm">©{year} Simple Travelers</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
