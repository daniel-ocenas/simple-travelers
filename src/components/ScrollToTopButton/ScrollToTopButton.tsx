'use client';
import React from 'react';
import { SStyledScrollToTopButton } from 'src/components/ScrollToTopButton/ScrollToTopButton.styled';
import { scrollToTopSmooth, useGetScroll } from 'src/utils/useGetScroll';

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
