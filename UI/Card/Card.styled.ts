import styled from 'styled-components';
import { QuickSand } from 'styles/App.styled';

export const SCardImage = styled.div<{ $src: string }>`
  width: 100%;
  height: 300px;
  min-height: 300px;
  border-radius: 16px 16px 0 0;
  text-align: center;
  background: 50% 50% ${({ $src }) => `url(${$src})`} no-repeat;
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
  background-color: var(--backgroundColor);

  h3 {
    font-size: 20px;
    margin: 8px 0;
  }

  p {
    margin: 6px 0;
    font-size: 18px;
  }

  box-shadow: 0 10px 20px -5px #ababab;

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
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  text-align: left;
  height: 120px;
  overflow: hidden;
  font-weight: 300;
  line-height: 1.5;
  margin-bottom: 8px;
`;
