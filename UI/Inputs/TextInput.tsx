import { Input } from 'antd';
import React, { useState } from 'react';

const { TextArea: AntTextArea } = Input;

interface TextInputProps {
  onChange: (value: string) => void;
  value?: string;
  placeholder?: string;
}

export const TextInput = ({ value, onChange, placeholder }: TextInputProps) => {
  const [val, setVal] = useState<string>(value ?? '');
  const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setVal(newValue);
    onChange(newValue);
  };
  return <Input value={val} onChange={onValueChange} placeholder={placeholder} />;
};

export const TextArea = ({ value, onChange, placeholder }: TextInputProps) => {
  const [val, setVal] = useState<string>(value ?? '');
  const onValueChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    setVal(newValue);
    onChange(newValue);
  };

  return <AntTextArea value={val} onChange={onValueChange} placeholder={placeholder} />;
};
