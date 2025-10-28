'use client';

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const getInitialBreakpoint = () => {
  if (typeof window === 'undefined') return true; // Default to desktop on server
  return window.innerWidth >= Breakpoints.lg;
};

export const useScreenSize = () => {
  const [size, setSize] = useState(() =>
    typeof window === 'undefined'
      ? [1200, 800] // Default size for SSR
      : [window.innerWidth, window.innerHeight]
  );

  useEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }

    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return { width: size[0], height: size[1] };
};

export const Breakpoints = {
  sm: 380,
  md: 768,
  lg: 1200,
  xl: 1920,
};

export function useSmall(): boolean {
  const { width } = useScreenSize();
  return width >= Breakpoints.sm;
}

export function useMedium(): boolean {
  const [isMedium, setIsMedium] = useState(() => {
    if (typeof window === 'undefined') return true;
    return window.innerWidth >= Breakpoints.md;
  });
  const { width } = useScreenSize();

  useEffect(() => {
    setIsMedium(width >= Breakpoints.md);
  }, [width]);

  return isMedium;
}

export function useLarge(): boolean {
  const [isLarge, setIsLarge] = useState(getInitialBreakpoint());
  const { width } = useScreenSize();

  useEffect(() => {
    setIsLarge(width >= Breakpoints.lg);
  }, [width]);

  return isLarge;
}

export function useXL(): boolean {
  const { width } = useScreenSize();
  return width >= Breakpoints.xl;
}

export function usePageMargin(): { mr: string; ml: string } {
  const md = useMedium();
  const lg = useLarge();
  const xxl = useXL();
  const location = useRouter();
  if (location.pathname === '/editor') {
    return { mr: '10%', ml: '10%' };
  }
  if (xxl || lg) {
    return { mr: '20%', ml: '20%' };
  } else if (md) {
    return { mr: '10%', ml: '10%' };
  } else {
    return { mr: '2%', ml: '2%' };
  }
}
