import { TitleWrapper } from 'components/Header/Header.styled';
import React from 'react';
import { Link } from 'UI';
import { useLarge } from 'utils/useBreakpoint';

export const TitleHeader = () => {
  const large = useLarge();
  return (
    <Link href={'/'} passHref>
      <TitleWrapper $large={large}>Simple Travelers</TitleWrapper>
    </Link>
  );
};
