import { NAV_LINK_DATA } from 'components/Header/Header';
import styles from 'components/Header/Header.module.css';
import SocialNetworkLinks from 'components/SocialSideBar';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { Flex, MarginBox } from 'UI';

function Footer() {
  const location = useRouter();
  const year = new Date().getFullYear();
  const links = NAV_LINK_DATA.filter((l) => l.small);
  return (
    <Flex direction={'column'}>
      <MarginBox mt={48} />
      <Flex direction={'column'} align={'center'} minWidth={'100%'}>
        <MarginBox mt={32} />
        <Flex direction={'row'} align={'center'}>
          {links.map((item, index) => {
            return (
              <li
                key={index}
                className={`${styles.navLink} ${styles.navLinkFixed} ${
                  location.pathname === item.path && styles.navLinkActive
                }`}
              >
                <Link href={item.path} passHref>
                  <p>{item.title}</p>
                </Link>
              </li>
            );
          })}
        </Flex>
        <SocialNetworkLinks outlined />
        <MarginBox mt={24} mb={32}>
          ©{year} Simple Travelers
        </MarginBox>
        <Link href={'/zasadypouzivaniaosobnychudajov'}>Zásady používania osobných údajov</Link>
        <MarginBox mt={32} />
      </Flex>
    </Flex>
  );
}

export default Footer;
