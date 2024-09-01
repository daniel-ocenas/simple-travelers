import FacebookPage from 'components/FacebookPage';
import InstagramFeed from 'components/InstagramFeed';
import { SSideBar } from 'components/SideBar/SideBar.styled';
import { WELCOME_PHOTO_HEIGHT } from 'components/WelcomePhoto/WelcomePhoto';
import Image from 'next/image';
import { useRouter } from 'next/router';
import process from 'process';
import React from 'react';
import Divider from 'UI/Divider';
import { MarginBox } from 'UI/MarginBox';
import { useLarge, useScreenSize } from 'utils/useBreakpoint';

const SideBar = () => {
  const { width } = useScreenSize();
  const location = useRouter();
  const large = useLarge();
  if (location.pathname === '/' || location.pathname === '/onas' || !large) {
    console.log('return null');
    return null;
  }

  return (
    <div style={{ position: 'relative' }}>
      <SSideBar $width={'30%'}>
        <MarginBox mt={WELCOME_PHOTO_HEIGHT} />
        {/*TODO zmenit fotku z faerov s lepsou kvalitou*/}
        <div style={{ textAlign: 'center' }}>
          <Image
            width={250}
            height={250}
            style={{
              margin: '5px',
              width: '20vw',
              minHeight: '20vw',
              objectFit: 'cover',
              borderRadius: '50%',
            }}
            alt="Liv a Dan"
            src="/static/images/photosFull/AboutUs.jpg"
          />
        </div>
        <div style={{ textAlign: 'center' }}>
          <h4>My sme Liv a Dan</h4>
          <p>
            Mladý pár zo Slovenska s vášňou pre cestovanie, fotografovanie a dobrodružstvo. Na našom blogu a sociálnych
            sieťach zdieľame autentické zážitky z ciest a inšpirujeme ostatných, že cestovať sa dá jednoducho a lacno.
          </p>
        </div>
        <Divider text="Facebook" />
        <FacebookPage token={process.env.NEXT_PUBLIC_FB_APP_ID} />
        <Divider text="Instagram" />
        <InstagramFeed counter={width < 1250 ? 8 : 9} />
      </SSideBar>
    </div>
  );
};
export default SideBar;
