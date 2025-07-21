import { SPage } from 'components/Page/Page.styled';
import React, { PropsWithChildren } from 'react';

interface PageProps extends PropsWithChildren {
  mr?: string;
  ml?: string;
}

const Page = ({ mr, ml, children }: PageProps) => {
  return (
    <SPage id={'page'} $top={'400px'} $mr={mr} $ml={ml}>
      {children}
    </SPage>
  );
};

export default Page;
