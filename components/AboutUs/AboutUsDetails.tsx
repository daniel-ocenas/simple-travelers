import Image from 'next/image';
import React from 'react';
import { Divider, Flex, MarginBox, Text } from 'UI';

const AboutUsItem = ({ text, icon, size = 32 }: { text: React.ReactNode; icon: string; size?: number }) => (
  <Flex direction={'row'} align={'center'} justify={'center'}>
    <Image className={'image'} src={`/static/icons/${icon}.svg`} alt={icon} width={size} height={size} />
    <MarginBox mr={16} />
    <Text color={'#888888'} $size={20}>
      {text}
    </Text>
  </Flex>
);

const AboutUsDetails = () => {
  return (
    <MarginBox my={16}>
      <Flex direction={'row'} align={'center'}>
        <AboutUsItem
          text={
            <>
              Prejdených <b>5000+km</b>
            </>
          }
          icon={'footprints'}
          size={36}
        />
        <Flex maxWidth={16}>
          <Divider direction={'vertical'} />
        </Flex>
        <AboutUsItem
          text={
            <>
              <b>969</b> Sledovateľov
            </>
          }
          icon={'group'}
        />
        <Flex maxWidth={16}>
          <Divider direction={'vertical'} />
        </Flex>
        <AboutUsItem
          text={
            <>
              Navštívených <b>41</b> krajín
            </>
          }
          icon={'globe'}
          size={28}
        />
      </Flex>
    </MarginBox>
  );
};
export default AboutUsDetails;
