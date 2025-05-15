import React, { useEffect, useState } from 'react';
import styles from './CheckButton.module.css';

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
    <div onClick={onClick} className={`${styles.checkButton} ${checked && styles.checkButtonActive}`}>
      {label}
    </div>
  );
};
export default CheckButton;
