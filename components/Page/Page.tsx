import { SPage } from 'components/Page/Page.styled';
import React, { PropsWithChildren } from 'react';
import { MarginBox } from 'UI';
import { useLarge } from 'utils/useBreakpoint';

interface PageProps extends PropsWithChildren {
  mr?: string;
  ml?: string;
}

const Page = ({ mr, ml, children }: PageProps) => {
  const large = useLarge();
  return (
    <SPage id={'page'} $top={large ? '400px' : '480px'} $mr={mr} $ml={ml}>
      <MarginBox mt={-80}>{children}</MarginBox>
    </SPage>
  );
};

export default Page;
