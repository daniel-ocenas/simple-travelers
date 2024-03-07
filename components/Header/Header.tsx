import SocialNetworkLinks from 'components/SocialSideBar';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Link } from 'UI/Link';

import useScreenSize from 'utils/useScreenSize';
import Burger from './BurgerButton';
import styles from './Header.module.css';

const SIDEBAR_DATA = [
  {
    title: 'Úvodná stránka',
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
  const location = useRouter();
  return (
    <div className={styles.tabsContainer}>
      <div className={styles.navList}>
        {SIDEBAR_DATA.map((item, index) => (
          <div key={index} className={styles.navListItem}>
            <div className={`${styles.navLink} ${location.pathname === item.path && styles.navLinkActive}`}>
              <Link href={item.path} passHref>
                {item.title}
              </Link>
            </div>
          </div>
        ))}
        <SocialNetworkLinks />
      </div>
    </div>
  );
}

function NavMenu() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
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
          {SIDEBAR_DATA.map((item, index) => {
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
      {sidebar && (
        <div
          style={{
            position: 'absolute',
            width: '100vw',
            height: '100vh',
            zIndex: '-1',
          }}
          onClick={showSidebar}
        />
      )}
    </>
  );
}

function Header() {
  const { width } = useScreenSize();
  const RenderTabs = () => {
    if (width < 768) return <NavMenu />;
    return <NavList />;
  };
  return (
    <>
      {RenderTabs()}
      <div className={styles.titleContainer}>
        <Link href="/" passHref>
          <img className={styles.titleTravelers} alt="title" src="/icons/SimpleTravelers.svg" />
        </Link>
        <p>Travel simply, simply love traveling</p>
      </div>
    </>
  );
}

export default Header;
