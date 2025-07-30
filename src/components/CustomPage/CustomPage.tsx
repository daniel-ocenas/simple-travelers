'use client';
import React, { PropsWithChildren } from 'react';
import { SPage } from 'src/components/CustomPage/CustomPage.styled';
import { MarginBox } from 'src/UI';
import { useLarge } from 'src/utils/useBreakpoint';

interface PageProps extends PropsWithChildren {
  mr?: string;
  ml?: string;
}

const CustomPage = ({ mr, ml, children }: PageProps) => {
  const large = useLarge();
  return (
    <SPage id={'page'} $top={large ? '500px' : '530px'} $mr={mr} $ml={ml}>
      <MarginBox mt={-80}>{children}</MarginBox>
    </SPage>
  );
};

export default CustomPage;
