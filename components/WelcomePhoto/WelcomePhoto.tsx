import Image from 'next/image';
import backgroundPhoto from 'public/static/images/Background.jpg';
import backgroundPhotoSmall from 'public/static/images/BackgroundSmall.jpg';
import React from 'react';
import { Flex } from 'UI/Flex';
import { Link } from 'UI/Link';
import useScreenSize from 'utils/useScreenSize';
import {
  SWelcomePhoto,
  SWelcomePhotoDivider,
  TitleCatchLine,
  TitleContainer,
  TitleTravelers,
} from './WelcomePhoto.styled';

const WelcomePhoto = () => {
  const { width } = useScreenSize();
  const smallView = width < 768;
  const backgroundImage = smallView ? backgroundPhotoSmall : backgroundPhoto;
  console.log(smallView, width);
  console.log(backgroundImage);
  return (
    <SWelcomePhoto>
      <Image alt={'welcome-photo'} src={backgroundImage} style={{ objectFit: 'cover' }} fill />
      <SWelcomePhotoDivider>
        <Image
          alt={'welcome-photo-divider'}
          src={'/static/images/BackgroundDivider.png'}
          style={{ objectFit: 'cover' }}
          fill
        />
      </SWelcomePhotoDivider>
      <TitleContainer>
        <Link href="/" passHref>
          <TitleTravelers alt="title" src="/static/icons/SimpleTravelers.svg" />
        </Link>
        <TitleCatchLine>
          {smallView ? (
            <Flex align={'center'} direction={'column'}>
              <Flex>{'Travel simply,'}</Flex>
              <Flex>{'simply love traveling'}</Flex>
            </Flex>
          ) : (
            'Travel simply, simply love traveling'
          )}
        </TitleCatchLine>
      </TitleContainer>
    </SWelcomePhoto>
  );
};
export default WelcomePhoto;
