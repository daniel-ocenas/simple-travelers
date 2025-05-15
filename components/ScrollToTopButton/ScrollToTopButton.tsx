import { SStyledScrollToTopButton } from 'components/ScrollToTopButton/ScrollToTopButton.styled';
import React from 'react';
import { scrollToTopSmooth, useGetScroll } from 'utils/useGetScroll';

const ScrollToTopButton = () => {
  const scroll = useGetScroll();

  if (scroll === 0) {
    return null;
  }

  return (
    <SStyledScrollToTopButton>
      <img src={'/static/icons/arrow-circle-up.svg'} alt={'btn-scroll-top'} onClick={() => scrollToTopSmooth()} />
    </SStyledScrollToTopButton>
  );
};

export default ScrollToTopButton;
