'use client';
import styled from 'styled-components';

export const HomePageWelcomeTitle = styled.h2`
  font-family: 'Nunito', sans-serif;
  letter-spacing: -2px;
  font-size: 2.13rem;
  text-align: center;
  font-weight: bold;
  color: #3f3f46;
  margin: 1em 0 0.2em 0;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased !important;
  text-rendering: optimizelegibility !important;

  @media (min-width: 1200px) {
    text-align: left;
  }
`;
export const HomePageWelcomeDescription = styled.p`
  text-align: center;
  font-size: 1.31rem;
  letter-spacing: -1px;
  color: #888888;

  @media (min-width: 1200px) {
    text-align: left;
  }
`;
