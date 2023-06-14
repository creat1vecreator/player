import React, { FC } from 'react';
import { Audio } from './Audio';
import { IAudioComponent } from './types';
import arrowRight from '@/assets/icons/arrowRight.svg';
import styles from './AudioComponent.module.scss';

export const AudioComponent: FC<IAudioComponent> = ({
  src,
  onBackClick,
}: IAudioComponent) => {
  return (
    <div className={styles.AudioComponent}>
      <button className={styles.AudioComponent__back} onClick={onBackClick}>
        <img
          src={arrowRight}
          alt="back image"
          className={styles.AudioComponent__backImage}
        />
        <span className={styles.AudioComponent__backText}>Back</span>
      </button>
      <Audio src={src} />
    </div>
  );
};
