import { SPage } from 'components/Page/Page.styled';
import { WELCOME_PHOTO_DIVIDER_TOP } from 'components/WelcomePhoto/WelcomePhoto';
import React, { PropsWithChildren } from 'react';
import { useLarge } from 'utils/useBreakpoint';

interface PageProps extends PropsWithChildren {
  top?: string | number;
  mr?: string;
  ml?: string;
}

const Page = ({ top = WELCOME_PHOTO_DIVIDER_TOP, mr, ml, children }: PageProps) => {
  const large = useLarge();
  const initialTop = !large ? '300px' : top;
  const topOffset = typeof initialTop === 'string' ? (initialTop ?? '') : `${initialTop}px`;
  return (
    <SPage id={'page'} $top={topOffset} $mr={mr} $ml={ml}>
      {children}
    </SPage>
  );
};

export default Page;
