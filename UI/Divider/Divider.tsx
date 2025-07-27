'use client';
import React from 'react';
import { Flex } from '../Flex';
import MarginBox from '../MarginBox';
import { SDivider, VerticalDivider } from './Divider.styled';

interface DividerProps {
  text?: string;
  direction?: 'horizontal' | 'vertical';
}

const Divider = ({ text, direction = 'horizontal' }: DividerProps) => {
  return (
    <>
      {direction === 'horizontal' ? (
        <SDivider>
          <span></span>
          <span>{text}</span>
          <span></span>
        </SDivider>
      ) : (
        <Flex minHeight={32}>
          <MarginBox mx={8}>
            <VerticalDivider />
          </MarginBox>
        </Flex>
      )}
    </>
  );
};

export default Divider;
