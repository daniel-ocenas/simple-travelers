import styled from 'styled-components';

export const SWelcomePhoto = styled.div<{ $height: string }>`
  position: absolute;
  width: 100%;
  height: 330px;
  top: 0;
  right: 0;
  object-fit: contain;

  @media (min-width: 768px) {
    height: ${({ $height }) => $height};
  }
`;

export const SWelcomePhotoDivider = styled.div<{ $top: string }>`
  position: absolute;
  width: 102%;
  height: 104px;
  top: 235px;
  left: -1px;
  overflow: hidden;

  img {
    filter: drop-shadow(0 100px 0 var(--backgroundColor));
    transform: translateY(-105px);
  }

  @media (min-width: 768px) {
    //top: 45vh;
    top: ${({ $top }) => $top};
    height: 11vh;
    img {
      filter: drop-shadow(0 11vh 0 var(--backgroundColor));
      transform: translateY(calc(-11vh - 1px));
    }
  }
`;

export const TitleContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  text-align: center;
  padding-bottom: 3px;

  @media (min-width: 768px) {
    margin-top: 8vh;
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
