import styled from 'styled-components';
import { Nunito } from 'styles/App.styled';

export const SDivider = styled.div`
  ${Nunito};
  color: var(--titleColor);
  font-size: 21px;
  font-weight: 500;
  text-align: left;
  padding: 5px;

  span {
    display: table-cell;
    position: relative;
  }

  span:first-child,
  span:last-child {
    width: 50%;
    top: 15px; /* adjust vertical align */
    -moz-background-size: 100% 2px; /* line width */
    background-size: 100% 2px; /* line width */
    background-position:
      0 0,
      0 100%;
    background-repeat: no-repeat;
  }

  span:first-child {
    /* color changes in here */
    background-image: -webkit-linear-gradient(180deg, transparent, #bababa);
    background-image: -moz-linear-gradient(180deg, transparent, #bababa);
    background-image: -o-linear-gradient(180deg, transparent, #bababa);
    background-image: linear-gradient(90deg, transparent, #bababa);
  }

  span:nth-child(2) {
    padding: 0px 5px;
    width: auto;
    white-space: nowrap;
  }

  span:last-child {
    /* color changes in here */
    background-image: -webkit-linear-gradient(180deg, #bababa, transparent);
    background-image: -moz-linear-gradient(180deg, #bababa, transparent);
    background-image: -o-linear-gradient(180deg, #bababa, transparent);
    background-image: linear-gradient(90deg, #bababa, transparent);
  }
`;
