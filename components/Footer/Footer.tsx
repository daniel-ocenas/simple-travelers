import { Divider } from 'antd';
import { NAV_LINK_DATA } from 'components/Header/Header';
import styles from 'components/Header/Header.module.css';
import SocialNetworkLinks from 'components/SocialSideBar';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { Flex, MarginBox, Text } from 'UI';
import { useSmall } from 'utils/useBreakpoint';
import { SFooter, SFooterWrapper } from './Footer.styled';

function Footer() {
  const small = useSmall();
  const location = useRouter();
  const year = new Date().getFullYear();
  const links = NAV_LINK_DATA.filter((l) => l.small);
  return (
    <SFooterWrapper>
      <Image src={'/static/images/photosFull/NZSeftonView.jpg'} alt={'footer-image'} fetchPriority={'low'} fill />
      <SFooter>
        <MarginBox mt={48} />
        <Divider />
        <MarginBox mt={32} />
        <Flex direction={'column'} align={'center'}>
          <Flex direction={small ? 'column' : 'row'} align={'center'} justify={'center'}>
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
          <MarginBox mt={16} />
          <Link href={'/zasadypouzivaniaosobnychudajov'}>Zásady používania osobných údajov</Link>
        </Flex>
        <Divider />
        <Flex direction={small ? 'column' : 'row'} align={'center'} justify={'space-between'}>
          <Text>©{year} Simple Travelers</Text>
          <MarginBox mt={small ? 16 : 0} />
          <SocialNetworkLinks outlined />
        </Flex>
        <MarginBox mt={32} />
      </SFooter>
    </SFooterWrapper>
  );
}

export default Footer;
