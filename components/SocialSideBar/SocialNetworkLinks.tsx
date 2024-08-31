import Image from 'next/image';
import React from 'react';
import { Link } from 'UI/Link';
import styles from './SocialSidebar.module.css';

const SocialNetworkLinks = () => {
  return (
    <div className={styles.socialSidebar}>
      <Link href={'https://www.instagram.com/simple__travelers'} external newTab passHref>
        <Image className={'image'} src={'/static/icons/icon-instagram.png'} alt={'instagram'} width={40} height={40} />
      </Link>
      <Link href={'https://www.facebook.com/WeAreSimpleTravelers'} external newTab passHref>
        <Image className={'image'} src={'/static/icons/icon-facebook.png'} alt={'facebook'} width={40} height={40} />
      </Link>
    </div>
  );
};

export default SocialNetworkLinks;
