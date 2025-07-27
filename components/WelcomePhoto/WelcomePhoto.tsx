'use client';
import { LogoSimpleTravelers } from 'components/Header/Header.styled';
import Image from 'next/image';
import backgroundPhoto from 'public/static/images/Background.jpg';
import backgroundPhotoSmall from 'public/static/images/BackgroundSmall.jpg';
import React from 'react';
import { Flex, Link, MarginBox } from 'UI';
import { useLarge, useMedium } from 'utils/useBreakpoint';
import { SWelcomePhoto, SWelcomePhotoDivider, TitleCatchLine, TitleContainer } from './WelcomePhoto.styled';

const WelcomePhoto = () => {
  const large = useLarge();
  const medium = useMedium();
  const backgroundImage = medium ? backgroundPhoto : backgroundPhotoSmall;

  return (
    <SWelcomePhoto>
      <Image alt={'welcome-photo'} src={backgroundImage} style={{ objectFit: 'cover' }} priority fill />
      <SWelcomePhotoDivider>
        <Image
          alt={'welcome-photo-divider'}
          src={'/static/images/BackgroundDivider2.png'}
          style={{ objectFit: 'cover' }}
          sizes={'(max-width: 768px) 100vw, 33vw'}
          priority
          fill
        />
      </SWelcomePhotoDivider>
      {!large && (
        <TitleContainer>
          <TitleCatchLine>
            <Flex align={'center'} direction={'column'}>
              <MarginBox my={24}>
                <Link href={'/'}>
                  <LogoSimpleTravelers
                    $maxHeight={100}
                    alt="simple-travelers-logo"
                    src="/static/icons/SimpleTravelers.svg"
                  />
                </Link>
              </MarginBox>
            </Flex>
          </TitleCatchLine>
        </TitleContainer>
      )}
    </SWelcomePhoto>
  );
};

export default WelcomePhoto;
