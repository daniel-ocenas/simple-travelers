import { LogoSimpleTravelers } from 'components/Header/Header.styled';
import Image from 'next/image';
import backgroundPhoto from 'public/static/images/Background.jpg';
import backgroundPhotoSmall from 'public/static/images/BackgroundSmall.jpg';
import React from 'react';
import { Flex } from 'UI/Flex';
import { MarginBox } from 'UI/MarginBox';
import { useLarge } from 'utils/useBreakpoint';
import { SWelcomePhoto, SWelcomePhotoDivider, TitleCatchLine, TitleContainer } from './WelcomePhoto.styled';

export const WELCOME_PHOTO_HEIGHT = '110vh';
export const WELCOME_PHOTO_DIVIDER_TOP = '100vh';

const WelcomePhoto = () => {
  const large = useLarge();

  const backgroundImage = large ? backgroundPhoto : backgroundPhotoSmall;

  return (
    <SWelcomePhoto $height={WELCOME_PHOTO_HEIGHT}>
      <Image alt={'welcome-photo'} src={backgroundImage} style={{ objectFit: 'cover' }} fill />
      <SWelcomePhotoDivider $top={WELCOME_PHOTO_DIVIDER_TOP}>
        <Image
          alt={'welcome-photo-divider'}
          src={'/static/images/BackgroundDivider2.png'}
          style={{ objectFit: 'cover' }}
          fill
          fetchPriority={'high'}
        />
      </SWelcomePhotoDivider>
      <TitleContainer>
        <TitleCatchLine>
          <Flex align={'center'} direction={'column'}>
            <MarginBox mt={large ? '8vh' : '0'} />
            {!large && (
              <LogoSimpleTravelers
                $maxHeight={250}
                alt="simple-travelers-logo"
                src="/static/icons/SimpleTravelers.svg"
              />
            )}
            <Flex>{'Cestovateľský blog,'}</Flex>
            <Flex>{'ktorý nakopne tvoju chuť objavovať svet.'}</Flex>
          </Flex>
        </TitleCatchLine>
      </TitleContainer>
    </SWelcomePhoto>
  );
};

export default WelcomePhoto;
