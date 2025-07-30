'use client';
import React from 'react';
import { SDivider, VerticalDivider } from 'src/UI/Divider/Divider.styled';
import { Flex } from 'src/UI/Flex';
import MarginBox from 'src/UI/MarginBox';

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
