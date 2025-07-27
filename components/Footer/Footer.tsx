'use client';
import { NAV_LINK_DATA } from 'components/Header/Header';
import styles from 'components/Header/Header.module.css';
import SocialNetworkLinks from 'components/SocialSideBar';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { Flex, MarginBox, Text } from 'UI';
import { useLarge } from 'utils/useBreakpoint';
import { SFooter, SFooterCatchLine, SFooterCopyright, SFooterDivider, SFooterWrapper } from './Footer.styled';

function Footer() {
  const large = useLarge();
  const location = useRouter();
  const year = new Date().getFullYear();
  const links = NAV_LINK_DATA.filter((l) => l.small || l.footer);

  return (
    <SFooterWrapper>
      <Image
        src={'/static/images/photosFull/NZSeftonView.jpg'}
        alt={'footer-image'}
        fetchPriority={'low'}
        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
        fill
      />
      <SFooterDivider>
        <Image
          alt={'welcome-photo-divider'}
          src={'/static/images/BackgroundDivider.png'}
          style={{ objectFit: 'cover' }}
          fetchPriority={'high'}
          fill
        />
      </SFooterDivider>
      <SFooter>
        <MarginBox mt={96} />
        <SFooterCatchLine>
          <Flex align={'center'} direction={'column'}>
            <Flex>{'Cestovateľský blog,'}</Flex>
            <Flex>{'ktorý nakopne tvoju chuť objavovať svet.'}</Flex>
          </Flex>
        </SFooterCatchLine>
        <MarginBox mt={32} />
        <Flex direction={'column'} align={'center'}>
          <Flex direction={large ? 'row' : 'column'} align={'center'} justify={'center'}>
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
        </Flex>
        <MarginBox mt={16} />
        <SFooterCopyright>
          <Flex direction={'column-reverse'} align={'center'} justify={'space-between'}>
            <MarginBox mt={64} />
            <Text>©{year} Simple Travelers</Text>
            <MarginBox mt={16} />
            <SocialNetworkLinks />
          </Flex>
        </SFooterCopyright>
      </SFooter>
    </SFooterWrapper>
  );
}

export default Footer;
