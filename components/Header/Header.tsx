import { MenuProps } from 'antd';
import {
  LogoSimpleTravelers,
  SDropdown,
  SideBar,
  SMarginBox,
  SNavList,
  STabsContainers,
} from 'components/Header/Header.styled';
import SocialNetworkLinks from 'components/SocialSideBar';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Flex } from 'UI/Flex';
import { Link } from 'UI/Link';
import { useLarge, useScreenSize } from 'utils/useBreakpoint';
import { scrollToTopSmooth, useGetScroll } from 'utils/useGetScroll';
import Burger from './BurgerButton';
import styles from './Header.module.css';

export const NAV_LINK_DATA = [
  {
    title: 'Domov',
    path: '/',
    small: true,
    large: false,
  },
  {
    title: 'O nás',
    path: '/onas',
    small: true,
    large: true,
  },
  {
    title: 'Blog',
    path: '/blog',
    small: true,
    large: true,
  },
  {
    title: 'logo',
    path: '/',
    small: false,
    large: true,
  },
  {
    title: 'Galéria',
    path: '/galeria',
    small: true,
    large: true,
  },
  {
    title: 'Videá',
    path: '/videa',
    small: true,
    large: true,
  },
];

const BlogCategories = ({ label, active }: { label: string; active: boolean }) => {
  const items: MenuProps['items'] = [
    {
      label: '1st menu item',
      key: '1',
    },
    {
      label: '2nd menu item',
      key: '2',
    },
    {
      label: '3rd menu item',
      key: '3',
    },
  ];
  return (
    <SDropdown menu={{ items }}>
      <div className={`${styles.navLink} ${active && styles.navLinkActive}`}>{label}</div>
    </SDropdown>
  );
};

function NavList() {
  const scroll = useGetScroll();
  const location = useRouter();

  const isTop = scroll === 0;
  const links = NAV_LINK_DATA.filter((l) => l.large);

  const getItem = (path: string, title: string) => {
    switch (title) {
      case '/blog':
        return <BlogCategories label={title} active={location.pathname === path} />;
      case 'logo':
        return <LogoSimpleTravelers alt="simple-travelers-logo" src="/static/icons/SimpleTravelers.svg" />;
      default:
        return <p>{title}</p>;
    }
  };

  return (
    <STabsContainers $isTop={isTop}>
      <Flex direction={'row'}>
        {/*<TitleHeader />*/}
        <SNavList>
          <Flex direction={'row'} align={'center'}>
            {links.map((item, index) => (
              <div key={index} className={styles.navListItem}>
                <div className={`${styles.navLink} ${location.pathname === item.path && styles.navLinkActive}`}>
                  <Link href={item.path} passHref>
                    {getItem(item.path, item.title)}
                  </Link>
                </div>
              </div>
            ))}
          </Flex>
          <SocialNetworkLinks position={'absolute'} top={10} right={0} outlined />
        </SNavList>
      </Flex>
    </STabsContainers>
  );
}

function NavMenu() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const links = NAV_LINK_DATA.filter((l) => l.small);

  return (
    <>
      <SMarginBox />
      <Burger showSidebar={showSidebar} buttonState={sidebar} />
      <div className={sidebar ? styles.navMenuActive : styles.navMenu}>
        <SocialNetworkLinks top={5} outlined />
        <ul className={styles.navMenuItems} onClick={showSidebar}>
          {links.map((item, index) => {
            return (
              <li key={index} className={styles.navText}>
                <Link href={item.path} passHref>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      {sidebar && <SideBar onClick={showSidebar} />}
    </>
  );
}

function Header() {
  const location = useRouter();
  const { height } = useScreenSize();
  const large = useLarge();

  const initialTop = large ? height : 300;

  useEffect(() => {
    if (location.pathname !== '/') {
      scrollToTopSmooth(initialTop - (large ? 0 : 16));
    }
    // eslint-disable-next-line
  }, [location]);

  return large ? <NavList /> : <NavMenu />;
}

export default Header;
