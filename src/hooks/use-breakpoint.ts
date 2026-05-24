'use client';

import { useEffect, useState } from 'react';

export const Breakpoints = {
  sm: 380,
  md: 768,
  lg: 1200,
  xl: 1920,
};

const DEFAULT_SIZE: [number, number] = [1200, 800];

export const useScreenSize = () => {
  const [size, setSize] = useState<[number, number]>(() =>
    typeof window === 'undefined'
      ? DEFAULT_SIZE
      : [window.innerWidth, window.innerHeight],
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
