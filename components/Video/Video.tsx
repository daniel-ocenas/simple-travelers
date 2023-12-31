import React from 'react';
import styles from './Video.module.css';

export const Video = ({ src, title }: { src: string; title: string }) => {
  return (
    <div className={styles.video}>
      <iframe src={src} title={title} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen />
    </div>
  );
};
