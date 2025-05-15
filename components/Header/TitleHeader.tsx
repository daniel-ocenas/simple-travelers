import { TitleWrapper } from 'components/Header/Header.styled';
import React from 'react';
import { Link } from 'UI/Link';
import { useLarge } from 'utils/useBreakpoint';

export const TitleHeader = () => {
  const xl = useLarge();
  return (
    <Link href={'/'} passHref>
      <TitleWrapper $xl={xl}>Simple Travelers</TitleWrapper>
    </Link>
  );
};
