import styled from 'styled-components';

export const SCard = styled.div`
  width: 100%;
  height: 100%;
  color: black;
  display: block;
  transition: 0.25s ease-in-out all;
  overflow: hidden;
  cursor: pointer;
  border-radius: 16px;
  box-shadow: 0 5px 10px 1px #ababab;
  background-color: var(--backgroundColor);

  &:hover {
    box-shadow: 0 8px 15px 4px #b0aeab;
  }
`;

export const SCardImage = styled.div<{ $src: string }>`
  width: 100%;
  height: 300px;
  min-height: 300px;
  border-radius: 16px 16px 0 0;
  text-align: center;
  background: 50% 50% ${({ $src }) => `url(/static${$src})`} no-repeat;
  background-size: cover;

  @media (min-width: 617px) {
    height: 216px;
    min-height: 216px;
  }
`;

export const CategoryRow = styled.div`
  font-family: 'Quicksand', serif;
  text-align: left;
  font-size: 1.1em;
  margin: 6px 0;
  text-decoration: none;

  span:first-child {
    margin: 0;
  }

  span:after {
    content: ', ';
  }

  span:last-child:after {
    content: '';
  }
`;
