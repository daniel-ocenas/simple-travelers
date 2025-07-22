import styled from 'styled-components';

export const SFooterWrapper = styled.footer`
  position: relative;
  width: 100%;
  height: 500px;
  bottom: -80px;
  right: 0;
`;

export const SFooterDivider = styled.div`
  position: absolute;
  width: 102%;
  height: 104px;
  bottom: 410px;
  left: -1px;
  overflow: hidden;
  z-index: 2;

  img {
    filter: drop-shadow(0 100px 0 var(--backgroundColor));
    transform: translateY(-105px);
    z-index: 2;
  }
`;

export const SFooter = styled.div`
  height: 500px;
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const SFooterCatchLine = styled.div`
  position: relative;
  z-index: 3;
  text-align: center;
  padding-bottom: 3px;
  font-family: 'Indie Flower', 'serif';
  font-size: 1.5em;
  margin: 0;
  text-shadow:
    2px 3px 3px rgba(255, 255, 255, 0.75),
    -3px 3px 3px rgba(255, 255, 255, 0.75),
    1px -3px 3px rgba(255, 255, 255, 0.75),
    -3px -3px 3px rgba(255, 255, 255, 0.75);

  @media (min-width: 768px) {
    font-size: 2em;
  }
`;

export const SFooterCopyright = styled.div`
  text-shadow:
    2px 3px 3px rgba(255, 255, 255, 0.5),
    -3px 3px 3px rgba(255, 255, 255, 0.5),
    1px -3px 3px rgba(255, 255, 255, 0.5),
    -3px -3px 3px rgba(255, 255, 255, 0.5);
`;
