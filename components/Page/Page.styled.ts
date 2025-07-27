import styled from 'styled-components';

export const SPage = styled.div<{ $top?: string; $mr?: string; $ml?: string }>`
  min-width: 300px;
  max-width: 1200px;
  padding: 1em;
  justify-content: center;
  margin-top: ${({ $top }) => $top};
  margin-right: auto;
  margin-left: auto;
`;
