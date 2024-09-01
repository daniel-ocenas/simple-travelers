import styled from 'styled-components';

export const SPage = styled.div<{ $top?: string; $mr?: string; $ml?: string }>`
  position: relative;
  min-width: 300px;
  margin-top: ${({ $top }) => $top};
  margin-right: ${({ $mr }) => ($mr ? $mr : `var(--sideRightMargin)`)};
  margin-left: ${({ $ml }) => ($ml ? $ml : `var(--sideLeftMargin)`)};
`;
