import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

import useScreenSize from '../useScreenSize';
import Burger from './BurgerButton';
import styles from './Header.module.css';

const SidebarData = [
  {
    title: 'Úvodná stránka',
    path: '/',
    listTab: true,
  },
  {
    title: 'O nás',
    path: '/onas',
    listTab: true,
  },
  {
    title: 'Blog',
    path: '/blog',
    listTab: true,
  },
  {
    title: 'Galéria',
    path: '/galeria',
    listTab: true,
  },
  {
    title: 'Videá',
    path: '/videa',
    listTab: true,
  },
];

function NavList() {
  return (
    <div className={styles.tabsContainer}>
      <div className={styles.navList}>
        {SidebarData.map((item, index) => (
          <div key={index} className={styles.navListItem}>
            <div className={styles.navLink}>
              <Link href={item.path} passHref>
                {item.title}
              </Link>
            </div>
          </div>
        ))}
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
          <a
            className="instagram"
            href="https://www.instagram.com/simple__travelers"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image className="image" src="/icons/icon-instagram.png" alt="instagram" width={55} height={55} />
          </a>
          <a
            className="facebook"
            href="https://www.facebook.com/WeAreSimpleTravelers"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image className="image" src="/icons/icon-facebook.png" alt="facebook" width={55} height={55} />
          </a>
        </div>
        <ul className={styles.navMenuItems} onClick={showSidebar}>
          {SidebarData.map((item, index) => {
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
      <div className={styles.headerContainer}>
        <div className={styles.titleContainer}>
          <Link href="/" passHref>
            <img className={styles.titleTravelers} alt="title" src="/icons/SimpleTravelers.svg" />
          </Link>
          <p>Travel simply, simply love traveling</p>
        </div>
      </div>
    </>
  );
}

export default Header;
