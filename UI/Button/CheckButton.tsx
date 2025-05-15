import React, { useEffect, useState } from 'react';
import { SCheckButton } from './CheckButton.styled';

interface CheckButtonProps {
  value?: boolean;
  label?: string;
  onChange?: (checked: boolean) => void;
}

const CheckButton = ({ label, value, onChange }: CheckButtonProps) => {
  const [checked, setChecked] = useState<boolean>(false);
  const onClick = () => {
    setChecked((prev) => !prev);
    onChange && onChange(!checked);
  };

  useEffect(() => {
    value !== undefined && setChecked(value);
  }, [value]);

  return (
    <SCheckButton onClick={onClick} $checked={checked}>
      {label}
    </SCheckButton>
  );
};
export default CheckButton;
