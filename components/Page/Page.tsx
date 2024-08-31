import { SPage } from 'components/Page/Page.styled';
import React, { PropsWithChildren } from 'react';
import { useMedium } from 'utils/useBreakpoint';

interface PageProps extends PropsWithChildren {
  top?: string | number;
}

const Page = ({ top = '45vh', children }: PageProps) => {
  const medium = useMedium();
  const initialTop = medium ? '33vh' : top;
  const topOffset = typeof initialTop === 'string' ? initialTop ?? '' : `${initialTop}px`;
  return (
    <SPage id={'page'} $top={topOffset}>
      {children}
    </SPage>
  );
};

export default Page;
