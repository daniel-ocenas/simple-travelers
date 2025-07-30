'use client';
import styled from 'styled-components';

export const SSocialNetworkLinks = styled.div<{ $position?: string; $top?: number; $right?: number }>`
  display: inline-block;
  position: ${({ $position }) => $position ?? 'relative'};
  ${({ $top }) => `top:  ${$top}px`};
  ${({ $right }) => `right:  ${$right}px`};

  a {
    display: inline-block;
    transition: background-color 0.3s ease;
    border-radius: 7px;
    padding: 5px;
    width: 40px;
    height: 40px;
    cursor: pointer;
  }

  a img {
    width: 40px;
    height: 40px;
    border-radius: 7px;
  }

  a:hover {
    background-color: var(--secondaryColor);
  }
`;
