'use client';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export const useScreenSize = () => {
  const [size, setSize] = useState([0, 0]);
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
  const { width } = useScreenSize();
  return width >= Breakpoints.md;
}

export function useLarge(): boolean {
  const { width } = useScreenSize();
  return width >= Breakpoints.lg;
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
