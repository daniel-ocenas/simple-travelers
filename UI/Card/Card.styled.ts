import styled from 'styled-components';
import { QuickSand } from 'styles/App.styled';

export const SCardImage = styled.div<{ $src: string }>`
  width: 100%;
  height: 300px;
  min-height: 300px;
  border-radius: 16px 16px 0 0;
  text-align: center;
  background: 50% 50% ${({ $src }) => `url(/static${$src})`} no-repeat;
  background-size: cover;

  @media (min-width: 617px) {
    height: 300px;
    min-height: 300px;
  }
`;

export const SCard = styled.div`
  ${QuickSand};
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

  h3 {
    font-size: 20px;
    margin: 12px 0;
  }

  h6 {
    font-size: 18px;
    margin: 8px 0;
    font-weight: normal;
  }

  p {
    font-size: 18px;
  }

  &:hover {
    box-shadow: 0 8px 15px 4px #b0aeab;
  }
`;

export const CategoryRow = styled.div`
  text-align: left;
  font-size: 18px;
  margin: 8px 0;
  font-weight: normal;
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

export const CardText = styled.div`
  text-align: left;
  max-height: 320px;
  overflow: hidden;
  text-overflow: ellipsis;

  p {
    margin: 6px 0 16px 0;
  }
`;
