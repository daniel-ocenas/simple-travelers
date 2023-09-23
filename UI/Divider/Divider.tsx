import React from 'react';
import styles from './Divider.module.css';

const Divider = (props: any) => {
  return (
    <div className={styles.divider}>
      <span></span>
      <span>{props.text}</span>
      <span></span>
    </div>
  );
};

export default Divider;
