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
  xs: 0,
  sm: 360,
  md: 576,
  lg: 768,
  xl: 1000,
  xxl: 1920,
  '4k': 3800,
};

export function useSmall(): boolean {
  const { width } = useScreenSize();
  return width <= Breakpoints.sm;
}

export function useMedium(): boolean {
  const { width } = useScreenSize();
  return width <= Breakpoints.md;
}

export function useLarge(): boolean {
  const { width } = useScreenSize();
  return width >= Breakpoints.lg;
}

export function useExtraLarge(): boolean {
  const { width } = useScreenSize();
  return width >= Breakpoints.xl;
}

export function usePageMargin(): string {
  const large = useLarge();
  const xl = useExtraLarge();

  if (xl) {
    return '30%';
  } else if (large) {
    return '10%';
  } else {
    return '2%';
  }
}
