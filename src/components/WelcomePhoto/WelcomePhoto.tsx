'use client';
import Image from 'next/image';
import backgroundPhoto from 'public/static/images/Background.jpg';
import backgroundPhotoSmall from 'public/static/images/BackgroundSmall.jpg';
import React from 'react';
import { LogoSimpleTravelers } from 'src/components/Header/Header.styled';
import {
  SWelcomePhoto,
  SWelcomePhotoDivider,
  TitleCatchLine,
  TitleContainer,
} from 'src/components/WelcomePhoto/WelcomePhoto.styled';
import { Flex, Link, MarginBox } from 'src/UI';
import { useLarge, useMedium } from 'src/utils/useBreakpoint';

const WelcomePhoto = () => {
  const large = useLarge();
  const medium = useMedium();
  const backgroundImage = medium ? backgroundPhoto : backgroundPhotoSmall;

  return (
    <SWelcomePhoto>
      <div style={{ position: 'relative', width: '100%', height: '500px' }}>
        <Image
          alt={'welcome-photo'}
          src={backgroundImage}
          style={{ objectFit: 'cover', position: 'absolute' }}
          sizes="100vw"
          priority
          fill
        />
      </div>
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
                <Link href={'/public'}>
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
