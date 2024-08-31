import useScreenSize from 'utils/useScreenSize';

export const Breakpoints = {
  xs: 0,
  sm: 360,
  md: 576,
  lg: 768,
  xl: 1200,
  xxl: 1920,
};

export function useSmall() {
  const { width } = useScreenSize();
  return width <= Breakpoints.sm;
}

export function useMedium() {
  const { width } = useScreenSize();
  return width <= Breakpoints.md;
}

export function useLarge() {
  const { width } = useScreenSize();
  return width >= Breakpoints.lg;
}

export function useExtraLarge() {
  const { width } = useScreenSize();
  return width >= Breakpoints.xl;
}
