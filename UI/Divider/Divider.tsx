import React from 'react';
import { SDivider } from './Divider.styled';

const Divider = (props: any) => {
  return (
    <SDivider>
      <span></span>
      <span>{props.text}</span>
      <span></span>
    </SDivider>
  );
};

export default Divider;
