'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React from 'react';

import { NAV_ITEMS } from '@/components/Header/Header';
import NavLink from '@/components/Header/NavLink';
import SocialNetworkLinks from '@/components/SocialSideBar/SocialNetworkLinks';
import { useLarge } from '@/hooks/useBreakpoint';

function Footer() {
  const large = useLarge();
  const pathname = usePathname();
  const year = new Date().getFullYear();
  const links = NAV_ITEMS.filter((l) => l.header);

  return (
    <div className="bg-background relative max-h-[500px] w-full">
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
      <div className="relative z-10 flex w-full flex-col items-center justify-center px-4">
        <div className="mt-24" />
        <div className="text-center">
          <div className="size flex flex-col items-center text-[32px]">
            <div>{'Cestovateľský blog,'}</div>
            <div>{'ktorý nakopne tvoju chuť objavovať svet.'}</div>
          </div>
        </div>
        <div className="mt-8" />
        <div className="my-6 flex space-x-8 self-center md:my-0 md:self-auto">
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
        </div>
        <div className="mt-4" />
        <div className="w-full px-4 py-8">
          <div className="flex h-[150px] flex-col-reverse items-center justify-between">
            <div className="mt-16" />
            <p className="text-sm">©{year} Simple Travelers</p>
            <div className="mt-4" />
            <SocialNetworkLinks />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
