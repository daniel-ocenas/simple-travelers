import { Input } from 'antd';
import { SizeType } from 'antd/es/config-provider/SizeContext';
import React, { useEffect, useState } from 'react';
import FloatingLabel from 'UI/Inputs/FloatingLabel';

const { TextArea: AntTextArea } = Input;

interface TextInputProps {
  onChange: (value: string) => void;
  value?: string;
  placeholder?: string;
  size?: SizeType;
  type?: 'text' | 'password';
}

export const TextInput = ({ value, onChange, placeholder, size, type }: TextInputProps) => {
  const [val, setVal] = useState<string | undefined>(value);

  useEffect(() => {
    setVal(value);
  }, [value]);

  const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setVal(newValue);
    onChange(newValue);
  };
  return <Input value={val} onChange={onValueChange} placeholder={placeholder} size={size} type={type} />;
};

export const TextArea = ({ value, onChange, placeholder }: TextInputProps) => {
  const [val, setVal] = useState<string | undefined>(value);

  useEffect(() => {
    setVal(value);
  }, [value]);

  const onValueChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    setVal(newValue);
    onChange(newValue);
  };

  return (
    <AntTextArea
      value={val}
      onChange={onValueChange}
      placeholder={placeholder}
      styles={{ textarea: { minHeight: '100px' } }}
    />
  );
};

interface FloatingTextInput extends TextInputProps {
  label?: string;
}

export const FloatingTextInput = (props: FloatingTextInput) => {
  return (
    <FloatingLabel label={props.label} placeholder={props.placeholder} value={props.value}>
      <TextInput {...props} size={'large'} />
    </FloatingLabel>
  );
};
