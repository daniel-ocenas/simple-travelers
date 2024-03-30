import styled from 'styled-components';

export const SWelcomePhoto = styled.div`
  position: absolute;
  width: 100%;
  height: calc(100vh + 97px);
  top: 0;
  right: 0;
  object-fit: cover;
`;

export const SWelcomePhotoDivider = styled.div`
  position: absolute;
  width: 102%;
  height: 104px;
  top: calc(100vh - 1px);
  left: -1px;
  overflow: hidden;

  img {
    filter: drop-shadow(0px 100px 0 var(--backgroundColor));
    transform: translateY(-105px);
  }
`;

export const TitleContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  margin-top: 10vh;
  text-align: center;
  /*background-color: var(--backgroundColor);*/
  padding-bottom: 3px;
`;

export const TitleTravelers = styled.img`
  max-height: 300px;
  clear: both;
  display: inline-block;
  cursor: pointer;

  :hover {
    transform: scale(1.1);
    transition: 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  :active {
    transform: scale(0.9);
    transition: 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
`;

export const TitleCatchLine = styled.p`
  font-family: 'Indie Flower';
  text-align: center;
  font-size: 1.3em;
  margin: 0;
  text-shadow: 2px 3px 3px rgba(255, 255, 255, 1), -3px 3px 3px rgba(255, 255, 255, 1),
    1px -3px 3px rgba(255, 255, 255, 1), -3px -3px 3px rgba(255, 255, 255, 1);

  @media (min-width: 992px) {
    font-size: 1.8em;
  }
`;
