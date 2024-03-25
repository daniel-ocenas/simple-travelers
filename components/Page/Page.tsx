import { SPage } from 'components/Page/Page.styled';
import React, { PropsWithChildren } from 'react';

interface PageProps extends PropsWithChildren {
  top?: string | number;
}

const Page = ({ top = '110vh', children }: PageProps) => {
  const topOffset = typeof top === 'string' ? top ?? '' : `${top}px`;
  return (
    <SPage id={'page'} $top={topOffset}>
      {children}
    </SPage>
  );
};

export default Page;
