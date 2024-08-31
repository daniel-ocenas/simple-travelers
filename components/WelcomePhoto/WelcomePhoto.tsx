import Image from 'next/image';
import backgroundPhoto from 'public/static/images/Background2.jpg';
import backgroundPhotoSmall from 'public/static/images/BackgroundSmall2.jpg';
import React from 'react';
import { Flex } from 'UI/Flex';
import { Link } from 'UI/Link';
import { MarginBox } from 'UI/MarginBox';
import { useLarge } from 'utils/useBreakpoint';
import {
  SWelcomePhoto,
  SWelcomePhotoDivider,
  TitleCatchLine,
  TitleContainer,
  TitleTravelers,
} from './WelcomePhoto.styled';

const WelcomePhoto = () => {
  const large = useLarge();

  const backgroundImage = large ? backgroundPhoto : backgroundPhotoSmall;

  return (
    <SWelcomePhoto>
      <Image alt={'welcome-photo'} src={backgroundImage} style={{ objectFit: 'cover' }} fill />
      <SWelcomePhotoDivider>
        <Image
          alt={'welcome-photo-divider'}
          src={'/static/images/BackgroundDivider2.png'}
          style={{ objectFit: 'cover' }}
          fill
          fetchPriority={'high'}
        />
      </SWelcomePhotoDivider>
      <TitleContainer>
        {!large && (
          <Link href="/" passHref>
            <TitleTravelers alt="title" src="/static/icons/SimpleTravelers.svg" />
          </Link>
        )}
        <TitleCatchLine>
          {large ? (
            <Flex align={'center'} direction={'column'}>
              <MarginBox mt={'10vh'} />
              Travel simply, simply love traveling
            </Flex>
          ) : (
            <Flex align={'center'} direction={'column'}>
              <Flex>{'Travel simply,'}</Flex>
              <Flex>{'simply love traveling'}</Flex>
            </Flex>
          )}
        </TitleCatchLine>
      </TitleContainer>
    </SWelcomePhoto>
  );
};

export default WelcomePhoto;
