import styled from 'styled-components';

export const SWelcomePhoto = styled.div`
  position: absolute;
  width: 100%;
  height: 500px;
  top: 0;
  right: 0;
`;

export const SWelcomePhotoDivider = styled.div`
  position: absolute;
  width: 102%;
  height: 104px;
  top: 406px;
  left: -1px;
  overflow: hidden;

  img {
    filter: drop-shadow(0 100px 0 var(--backgroundColor));
    transform: translateY(-105px);
  }
`;

export const TitleContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  text-align: center;
  padding-bottom: 3px;

  @media (min-width: 1200px) {
    margin-top: 80px;
  }
`;

export const TitleCatchLine = styled.div`
  font-family: 'Indie Flower', 'serif';
  text-align: center;
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
