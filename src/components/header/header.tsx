'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { useTheme } from 'next-themes';

import NavLink from './nav-link';
import Burger from '@/components/buttons/burger';
import SocialNetworkLinks from '@/components/social-side-bar';
import ThemeToggle from '@/components/theme-toggle';
import { useMedium } from '@/hooks/use-breakpoint';
import { useScroll } from '@/hooks/use-scroll';

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

const Logo = () => {
  const { theme } = useTheme();
  const isTop = useScroll() === 0;
  return (
    <Link href="/" className="self-start md:self-auto">
      {theme === 'dark' && !isTop ? (
        <Image
          alt="simple-travelers-logo"
          src={`/static/icons/simpletravelers-white.svg`}
          height={47}
          width={100}
        />
      ) : (
        <Image
          alt="simple-travelers-logo"
          src={`/static/icons/simpletravelers.svg`}
          height={47}
          width={100}
        />
      )}
    </Link>
  );
};

const NavList = () => {
  const isTop = useScroll() === 0;
  const medium = useMedium();

  const links = NAV_ITEMS.filter((item) => item.header);

  return (
    <nav
      className={`sticky top-0 z-[100] h-[80px] py-5 ${
        isTop ? 'bg-transparent' : 'bg-glass'
      }`}
    >
      <div
        className={
          'mx-auto flex w-full max-w-screen-xl flex-col justify-end px-[5vw] md:flex-row xl:px-0'
        }
      >
        <div className={'fjustify-start'}>
          <Logo />
        </div>
        <div className="my-6 ml-auto flex space-x-8 self-center md:my-0 md:self-auto">
          <ul className="flex flex-nowrap space-x-8">
            {links.map((item) => (
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
        </div>
        <div className="my-auto ml-8 mr-6">
          <ThemeToggle />
        </div>
        {medium && <SocialNetworkLinks outlined />}
      </div>
    </nav>
  );
};

function NavMenu() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  const links = NAV_ITEMS.filter((item) => item.header);

  return (
    <>
      <div className="relative z-[100] flex h-[80px] flex-row justify-between p-3">
        <Logo />
      </div>
      <div className={'fixed right-0 top-0 z-[100] p-3'}>
        <Burger showSidebar={showSidebar} buttonState={sidebar} />
      </div>
      <div
        className={`bg-primary fixed inset-y-0 right-0 z-50 w-64  transform transition duration-300 ease-in-out ${
          sidebar ? '-translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4">
          <SocialNetworkLinks outlined />
        </div>
        <ul className="flex flex-col space-y-4 p-4" onClick={showSidebar}>
          {links.map((item, index) => (
            <li key={index} className="nav-text">
              <Link href={item.path} passHref>
                <span className="hover:bg-secondary block cursor-pointer rounded px-4 py-2">
                  {item.title}
                </span>
              </Link>
            </li>
          ))}
          <div className={'px-2 py-2'}>
            <ThemeToggle />
          </div>
        </ul>
      </div>
      {sidebar && <div className="fixed inset-0 " onClick={showSidebar} />}
    </>
  );
}

export default function Header() {
  const medium = useMedium();

  // // Autoscroll into view
  // const location = useRouter();
  // const initialTop = 280;
  // useEffect(() => {
  //   if (location.pathname !== '/') {
  //     scrollToTopSmooth(initialTop - (large ? 0 : 16));
  //   }
  //   // eslint-disable-next-line
  // }, [location]);

  return medium ? <NavList /> : <NavMenu />;
}
