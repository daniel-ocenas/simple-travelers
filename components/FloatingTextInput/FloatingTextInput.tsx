import { SizeType } from 'antd/lib/config-provider/SizeContext';
import React from 'react';
import { FloatingLabel, TextInput } from 'UI';

interface FloatingTextInputProps {
  onChange: (value: string) => void;
  value?: string;
  placeholder?: string;
  size?: SizeType;
  type?: 'text' | 'password';
  label?: string;
}

const FloatingTextInput = (props: FloatingTextInputProps) => {
  return (
    <FloatingLabel label={props.label} placeholder={props.placeholder} value={props.value}>
      <TextInput {...props} size={'large'} />
    </FloatingLabel>
  );
};
export default FloatingTextInput;
