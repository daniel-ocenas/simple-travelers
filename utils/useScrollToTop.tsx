import { useEffect, useState } from 'react';

export function useScrollToTop() {
  const [scroll, setScroll] = useState(0);

  function onScroll() {
    setScroll(scrollY);
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return scroll;
}

export function scrollToTopSmooth(top?: number): void {
  window.scrollTo({
    top: top ?? 0,
    left: 0,
    behavior: 'smooth',
  });
}
