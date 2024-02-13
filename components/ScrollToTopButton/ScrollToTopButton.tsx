import React from 'react';
import { scrollToTopSmooth, useScrollToTop } from 'utils/useScrollToTop';
import styles from './ScrollToTopButton.module.css';

const ScrollToTopButton = () => {
  const scroll = useScrollToTop();

  if (scroll === 0) {
    return null;
  }

  return (
    <div className={styles.iconWrapper}>
      <img src={'./icons/arrow-circle-up.svg'} alt={'btn-scroll-top'} onClick={() => scrollToTopSmooth()} />
    </div>
  );
};

export default ScrollToTopButton;
