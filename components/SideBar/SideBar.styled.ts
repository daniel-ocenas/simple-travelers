import styled from 'styled-components';
import { QuickSand } from 'styles/App.styled';

export const SSideBar = styled.div<{ $width: string }>`
  ${QuickSand};
  position: absolute;
  top: 0;
  right: 0;
  width: calc(${({ $width }) => $width} - 1em - ${({ $width }) => $width} / 7);
  height: 100%;
  display: none;
  padding: 0 calc(var(--sideRightMargin) / 10);
  z-index: 10;

  h4 {
    font-size: 18px;
  }

  p {
    font-size: 18px;
    font-weight: normal;
  }

  @media (min-width: 1000px) {
    display: inline-block;
  }
`;
