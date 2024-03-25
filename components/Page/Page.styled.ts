import styled from 'styled-components';

export const SPage = styled.div<{ $top?: string }>`
  position: relative;
  min-width: 300px;
  margin-top: ${({ $top }) => $top};
  margin-right: var(--sideRightMargin);
  margin-left: var(--sideLeftMargin);
`;
