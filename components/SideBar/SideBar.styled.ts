import styled from 'styled-components';

export const SSideBar = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: calc(var(--sideRightMargin) - 1em - var(--sideRightMargin) / 7);
  height: 100%;
  display: none;
  padding: 0 calc(var(--sideRightMargin) / 10);
  z-index: 10;

  @media (min-width: 992px) {
    display: inline-block;
  }
`;
