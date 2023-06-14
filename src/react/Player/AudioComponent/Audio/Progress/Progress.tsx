import React, { FC } from 'react';
import { IProgress } from './types';
import styles from './Progress.module.scss';

import { Slider } from '@/react/components/Slider';

export const Progress: FC<IProgress> = ({
  className,
  setProgress,
  progress,
}: IProgress) => {
  return (
    <Slider
      setProgress={setProgress}
      progress={progress}
      styles={{ wrapperStyles: className, dotStyles: styles.Progress__dot }}
    />
  );
};
