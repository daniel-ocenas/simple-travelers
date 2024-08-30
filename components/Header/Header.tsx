import { SideBar, SMarginBox, SNavList, STabsContainers } from 'components/Header/Header.styled';
import { TitleHeader } from 'components/Header/TitleHeader';
import SocialNetworkLinks from 'components/SocialSideBar';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Flex } from 'UI/Flex';
import { Link } from 'UI/Link';
import { scrollToTopSmooth, useGetScroll } from 'utils/useGetScroll';
import useScreenSize from 'utils/useScreenSize';
import Burger from './BurgerButton';
import styles from './Header.module.css';

const NAV_LINK_DATA = [
  {
    title: 'Domov',
    path: '/',
  },
  {
    title: 'O nás',
    path: '/onas',
  },
  {
    title: 'Blog',
    path: '/blog',
  },
  {
    title: 'Galéria',
    path: '/galeria',
  },
  {
    title: 'Videá',
    path: '/videa',
  },
];

function NavList() {
  const scroll = useGetScroll();
  const isTop = scroll === 0;

  return (
    <STabsContainers $isTop={isTop}>
      <Flex direction={'row'}>
        <TitleHeader />
        <SNavList>
          {NAV_LINK_DATA.map((item, index) => (
            <div key={index} className={styles.navListItem}>
              <div className={`${styles.navLink} ${location.pathname === item.path && styles.navLinkActive}`}>
                <Link href={item.path} passHref>
                  {item.title}
                </Link>
              </div>
            </div>
          ))}
          <SocialNetworkLinks />
        </SNavList>
      </Flex>
    </STabsContainers>
  );
}

function NavMenu() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <SMarginBox />
      <Burger showSidebar={showSidebar} buttonState={sidebar} />
      <div className={sidebar ? styles.navMenuActive : styles.navMenu}>
        <div className={styles.socialMenu}>
          <Link href="https://www.instagram.com/simple__travelers" className="instagram" external newTab passHref>
            <Image className="image" src="/icons/icon-instagram.png" alt="instagram" width={55} height={55} />
          </Link>
          <Link href="https://www.facebook.com/WeAreSimpleTravelers" className="facebook" external newTab passHref>
            <Image className="image" src="/icons/icon-facebook.png" alt="facebook" width={55} height={55} />
          </Link>
        </div>
        <ul className={styles.navMenuItems} onClick={showSidebar}>
          {NAV_LINK_DATA.map((item, index) => {
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
  const { width } = useScreenSize();
  const location = useRouter();
  const { height } = useScreenSize();
  const medium = width < 768;

  useEffect(() => {
    if (location.pathname !== '/') {
      scrollToTopSmooth(height - (medium ? 0 : 16));
    }
    // eslint-disable-next-line
  }, [location]);

  return medium ? <NavMenu /> : <NavList />;
}

export default Header;
