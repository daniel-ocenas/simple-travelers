import React from 'react';
import { scrollToTopSmooth, useGetScroll } from 'utils/useGetScroll';
import styles from './ScrollToTopButton.module.css';

const ScrollToTopButton = () => {
  const scroll = useGetScroll();

  if (scroll === 0) {
    return null;
  }

  return (
    <div className={styles.iconWrapper}>
      <img src={'/static/icons/arrow-circle-up.svg'} alt={'btn-scroll-top'} onClick={() => scrollToTopSmooth()} />
    </div>
  );
};

export default ScrollToTopButton;
