import { useMediaQuery } from '@react-hook/media-query';

export const breakpoint = {
  xs: 0,
  sm: 360,
  md: 576,
  lg: 768,
  xl: 1200,
  xxl: 1920,
};

export type ThemeBreakpointKeyType = keyof typeof breakpoint;
type breakpointMappingType = Record<ThemeBreakpointKeyType, number>;
// export type BreakpointKeyType = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
export const Breakpoints: breakpointMappingType = {
  xs: 0,
  sm: 1,
  md: 2,
  lg: 3,
  xl: 4,
  xxl: 5,
};

export function useBreakpoint() {
  const matches = [
    useMediaQuery(`(min-width: ${breakpoint.xs}px)`),
    useMediaQuery(`(min-width: ${breakpoint.sm}px)`),
    useMediaQuery(`(min-width: ${breakpoint.md}px)`),
    useMediaQuery(`(min-width: ${breakpoint.lg}px)`),
    useMediaQuery(`(min-width: ${breakpoint.xl}px)`),
    useMediaQuery(`(min-width: ${breakpoint.xxl}px)`),
  ];
  return matches.reduce((acc, next, i) => (next ? i : acc), 0);
}

export function useSmall() {
  const match = useBreakpoint();
  return match <= Breakpoints.sm;
}

export function useMedium() {
  const match = useBreakpoint();
  return match <= Breakpoints.md;
}

export function useLarge() {
  const match = useBreakpoint();
  return match >= Breakpoints.lg;
}

export function useExtraLarge() {
  const match = useBreakpoint();
  return match >= Breakpoints.xl;
}

// const BreakpointSelectorMapping = [Breakpoints.md, Breakpoints.lg];

// export type BreakpointSelectable<T> = T | Array<T> | undefined;
