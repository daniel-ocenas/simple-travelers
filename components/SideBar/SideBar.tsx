import FacebookPage from 'components/FacebookPage';
import InstagramFeed from 'components/InstagramFeed';
import { SSideBar } from 'components/SideBar/SideBar.styled';
import process from 'process';
import React from 'react';
import Divider from 'UI/Divider';
import { MarginBox } from 'UI/MarginBox';
import useScreenSize from 'utils/useScreenSize';

const SideBar = () => {
  const { width } = useScreenSize();
  return (
    <div style={{ position: 'relative' }}>
      <SSideBar>
        <MarginBox mt={'110vh'} />
        {/*TODO zmenit fotku z faerov*/}
        <div style={{ textAlign: 'center' }}>
          <img
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
