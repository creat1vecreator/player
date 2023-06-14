import { MouseEvent, useRef } from 'react';

export const useSliderDragAndClick = (
  progress: number,
  setProgress: (progressValue: number) => void,
) => {
  const sliderWrapperRef = useRef<HTMLDivElement | null>(null);
  const body = document.querySelector('body');

  const handleSliderClick = (event: MouseEvent<HTMLDivElement>) => {
    const sliderWidth = event.currentTarget.offsetWidth;
    const clickPosition =
      event.clientX - event.currentTarget.getBoundingClientRect().left;
    const newProgress = (clickPosition / sliderWidth) * 100;
    if (newProgress <= 100) setProgress(newProgress);
  };

  const handleSliderDrag = (event: any) => {
    const sliderWidth = sliderWrapperRef.current?.offsetWidth;
    const cursorPosition = event.clientX;

    const { left, right } =
      sliderWrapperRef.current?.getBoundingClientRect() || {};
    if (cursorPosition >= left && cursorPosition <= right) {
      const progressDelta = cursorPosition - left;
      const newProgress = (progressDelta / sliderWidth) * 100;

      setProgress(newProgress);
    }
    if (cursorPosition < left) setProgress(0);
    if (cursorPosition > right) setProgress(100);
  };

  function handleMouseUp() {
    body.removeEventListener('mousemove', handleSliderDrag);
    body.removeEventListener('mouseup', handleMouseUp);
    body.removeEventListener('mouseleave', handleMouseUp);
  }

  const handleMouseDown = () => {
    body.addEventListener('mousemove', handleSliderDrag);
    body.addEventListener('mouseup', handleMouseUp);
    body.addEventListener('mouseleave', handleMouseUp);
  };

  return {
    sliderWrapperRef,
    handleSliderClick,
    handleMouseDown,
  };
};
