import Image from 'next/image';
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
  const smallView = width < 850;
  return (
    <SWelcomePhoto>
      <Image
        alt={'welcome-photo'}
        src={`/static/images/${smallView ? 'BackgroundSmall' : 'Background'}.jpg`}
        style={{ objectFit: 'cover' }}
        fill
      />
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
