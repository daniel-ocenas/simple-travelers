import styled from 'styled-components';

export const STabsContainers = styled.div<{ $isTop: boolean }>`
  width: 100%;
  height: var(--tabsHeight);
  position: sticky;
  top: 0;

  /*background: linear-gradient(*/
  /*    180deg,*/
  /*    var(--backgroundColor) 0%,*/
  /*    var(--backgroundColor) 96%,*/
  /*    var(--primaryColor) 97%,*/
  /*    var(--backgroundColor) 100%*/
  /*);*/
  background: var(--backgroundColor);
  background: ${({ $isTop }) => $isTop && 'transparent'};
  -webkit-box-shadow: 0 1px 5px rgba(190, 190, 190, 0.46);
  -moz-box-shadow: 0 1px 5px rgba(190, 190, 190, 0.46);
  margin-bottom: 5px;
  vertical-align: middle;
  text-align: center;
  z-index: 1000;
  transition: 0.25s ease;
`;

export const SNavList = styled.div`
  vertical-align: middle;
  display: inline-block;
  list-style: none;
  line-height: 2.3em;
  white-space: nowrap;
  font-size: 22px;
  margin: auto;
`;

export const SideBar = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: -1;
`;

export const SMarginBox = styled.div`
  width: 100%;
  height: var(--tabsHeight);
`;

export const TitleWrapper = styled.div<{ $xl: boolean }>`
  position: absolute;
  font-family: 'Indie Flower';
  text-align: center;
  color: var(--primaryColor);
  font-size: ${({ $xl }) => ($xl ? '2.4em' : '1.5em')};
  top: ${({ $xl }) => ($xl ? '0' : '8px')};
  left: ${({ $xl }) => ($xl ? '32px' : '16px')};
  font-weight: 600;
  margin-bottom: 8px;
  margin-top: 0;
`;
