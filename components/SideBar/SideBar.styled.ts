import styled from 'styled-components';
import { Nunito } from 'styles/App.styled';

export const SSideBar = styled.div<{ $width: string }>`
  ${Nunito};
  top: 0;
  right: 0;
  width: ${({ $width }) => $width};
  // width: calc(${({ $width }) => $width} - 1em - ${({ $width }) => $width} / 7);
  display: none;
  margin-left: 64px;
  z-index: 10;

  h4 {
    font-size: 18px;
  }

  p {
    font-size: 18px;
    font-weight: normal;
  }

  @media (min-width: 1200px) {
    display: inline-block;
  }
`;
