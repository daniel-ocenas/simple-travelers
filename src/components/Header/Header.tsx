'use client';

import Image from 'next/image';
import Link from 'next/link';

import NavLink from './NavLink';
import SocialNetworkLinks from '@/components/SocialSideBar/SocialNetworkLinks';
import ThemeToggle from '@/components/ThemeToggle/ThemeToggle';
import { useLarge } from '@/hooks/useBreakpoint';
import { useGetScroll } from '@/hooks/useGetScroll';

interface NavLinkDataProps {
  title: string;
  path: string;
  header: boolean;
}

export const NAV_ITEMS: NavLinkDataProps[] = [
  {
    title: 'Domov',
    path: '/',
    header: true,
  },
  {
    title: 'O nás',
    path: '/about',
    header: true,
  },
  {
    title: 'Blog',
    path: '/blog',
    header: true,
  },
  {
    title: 'Galéria',
    path: '/gallery',
    header: true,
  },
  {
    title: 'Videá',
    path: '/videos',
    header: true,
  },
  {
    title: 'gdpr',
    path: '/gdpr',
    header: false,
  },
];

export default function Header() {
  const large = useLarge();
  const headerList = NAV_ITEMS.filter((item) => item.header);
  const isTop = useGetScroll() === 0;
  return (
    <nav
      className={`sticky top-0 z-[100] py-6 ${
        isTop ? 'bg-transparent' : 'bg-glass'
      }`}
    >
      <div
        className={
          'mx-auto flex w-full max-w-screen-xl flex-col justify-between px-[10vw] md:flex-row md:px-[5vw]'
        }
      >
        <Link href="/" className="self-start md:self-auto">
          <Image
            alt="simple-travelers-logo"
            src="/static/icons/SimpleTravelers.svg"
            height={12}
            width={100}
          />
        </Link>
        <div className="my-6 flex space-x-8 self-center md:my-0 md:self-auto">
          <ul className="flex flex-wrap  space-x-8">
            {headerList.map((item) => (
              <li
                key={item.path}
                className={`${
                  isTop
                    ? 'text-gray-500 hover:text-black'
                    : 'text-secondary hover:text-primary'
                } whitespace-nowrap py-2 text-lg 
                font-medium transition-all duration-300`}
              >
                <NavLink path={item.path}>{item.title}</NavLink>
              </li>
            ))}
          </ul>
          {/*Dropping out from dark theme as its not aligned with the brand*/}
          <div className="right-[10vw] my-auto md:static">
            <ThemeToggle />
          </div>
        </div>
      </div>
      {large && (
        <div
          className={
            'absolute -top-[40%] bottom-0 right-0 h-[120px] translate-y-[50%] transform'
          }
        >
          <SocialNetworkLinks outlined />
        </div>
      )}
    </nav>
  );
}
