import React, { FC } from 'react';
import cn from 'classnames/bind';
import { useSliderDragAndClick } from './hooks/useSliderDragAndClick';
import { ISlider } from './types';
import sliderStyles from './Slider.module.scss';

const cx = cn.bind(sliderStyles);

export const Slider: FC<ISlider> = ({
  styles,
  progress,
  setProgress,
}: ISlider) => {
  const { wrapperStyles, dotStyles, lineStyles, progressStyles } = styles ?? {};
  const { handleSliderClick, sliderWrapperRef, handleMouseDown } =
    useSliderDragAndClick(progress, setProgress);

  return (
    <div
      className={cx(sliderStyles.Slider, wrapperStyles)}
      onClick={handleSliderClick}
      ref={sliderWrapperRef}
    >
      <div
        style={{ left: `${progress}%` }}
        onMouseDown={handleMouseDown}
        className={cx(sliderStyles.Slider__progressDot, dotStyles)}
      />

      <div
        className={cx(
          sliderStyles.Slider__line,
          sliderStyles.Slider__line_progress,
          progressStyles,
        )}
        style={{ width: `${progress}%` }}
      />

      <div className={cx(sliderStyles.Slider__line, lineStyles)} />
    </div>
  );
};
