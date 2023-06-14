import React from 'react';
import { ISliderControls } from '../types';
import styles from './Volume.module.scss';

import { Slider } from '@/react/components/Slider';

export const Volume = ({ progress, setProgress }: ISliderControls) => {
  return (
    <Slider
      setProgress={setProgress}
      progress={progress}
      styles={{
        wrapperStyles: styles.Volume,
        dotStyles: styles.Volume__dot,
        progressStyles: styles.Volume__progress,
      }}
    />
  );
};
