import styled from 'styled-components';

export const SStyledScrollToTopButton = styled.div`
  position: fixed;
  bottom: 15px;
  right: 15px;
  z-index: 2000;

  img {
    width: 48px;
    height: 48px;
    cursor: pointer;
  }

  :hover img {
    transform: scale(1.05);
  }
`;
