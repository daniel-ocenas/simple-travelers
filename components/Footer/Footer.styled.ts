import styled from 'styled-components';

export const SFooterWrapper = styled.footer`
  position: relative;
  width: 100%;
  height: 400px;
  bottom: 0;
  right: 0;

  img {
    object-fit: cover;
  }
`;

export const SFooter = styled.div`
  position: relative;
  width: 100%;
  min-width: 300px;
  max-width: 1200px;
  padding: 1em;
  justify-content: center;
  margin: auto;
  align-items: center;
  z-index: 1;
`;
