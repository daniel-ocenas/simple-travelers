import FacebookPage from 'components/FacebookPage';
import { SSideBar } from 'components/SideBar/SideBar.styled';
import Image from 'next/image';
import { useRouter } from 'next/router';
import process from 'process';
import React, { PropsWithChildren } from 'react';
import { Divider, Flex, MarginBox, Text } from 'UI';

const DISABLED_URLS = ['/', '/onas', '/editor'];

export const WithSidebar = ({ children }: PropsWithChildren) => {
  return (
    <Flex maxWidth={1200} justify={'center'} align={'flex-start'}>
      <Flex direction={'column'} maxWidth={900}>
        {children}
      </Flex>
      <SideBar />
    </Flex>
  );
};

const SideBar = () => {
  const location = useRouter();
  const disabled = DISABLED_URLS.some((url) => url === location.pathname);

  return (
    <SSideBar $width={'300px'}>
      {/*<MarginBox mt={WELCOME_PHOTO_HEIGHT} />*/}
      {/*TODO zmenit fotku z faerov s lepsou kvalitou*/}
      {!disabled && (
        <>
          <div style={{ textAlign: 'center' }}>
            <Image
              width={250}
              height={250}
              style={{
                margin: '5px',
                objectFit: 'cover',
                borderRadius: '50%',
              }}
              alt="Liv a Dan"
              src="/static/images/photosFull/AboutUs.jpg"
            />
          </div>
          <Flex direction={'column'}>
            <Text type={'h4'} $align={'center'}>
              My sme Liv a Dan
            </Text>
            <Text $align={'center'}>
              Mladý pár zo Slovenska s vášňou pre cestovanie, fotografovanie a dobrodružstvo. Na našom blogu a
              sociálnych sieťach zdieľame autentické zážitky z ciest a inšpirujeme ostatných, že cestovať sa dá
              jednoducho a lacno.
            </Text>
            <MarginBox mt={16} />
          </Flex>
        </>
      )}
      <Divider text="Facebook" />
      <FacebookPage token={process.env.NEXT_PUBLIC_FB_APP_ID} />
      {/*<MarginBox mt={16} />*/}
      {/*<Divider text="Instagram" />*/}
      {/*<InstagramFeed />*/}
    </SSideBar>
  );
};
export default SideBar;
