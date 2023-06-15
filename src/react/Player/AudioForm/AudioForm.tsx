import React, { FC, KeyboardEvent } from 'react';
import cn from 'classnames/bind';
import { IAudioForm } from './types';
import arrowRight from '@/assets/icons/arrowRight.svg';
import styles from './AudioForm.module.scss';

import { Button } from '@/react/ui-components/Button/Button';
import { Input } from '@/react/ui-components/Input';

const cx = cn.bind(styles);
export const AudioForm: FC<IAudioForm> = ({
  inputValue,
  handleInputValue,
  onForwardClick,
  isForwardDisabled,
  error,
}: IAudioForm) => {
  const { isErrorVisible, errorMessage } = error;
  const isError = isErrorVisible && Boolean(errorMessage);

  const onInputKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onForwardClick();
    }
  };

  return (
    <div className={styles.AudioForm}>
      <div className={styles.AudioForm__title}>Insert the link</div>

      <div className={styles.AudioForm__form}>
        <Input
          onKeyDown={onInputKeyDown}
          value={inputValue}
          onChange={handleInputValue}
          placeholder="https://"
          className={styles.AudioForm__input}
          isError={isError}
        />
        <Button
          className={styles.AudioForm__forward}
          isDisabled={isForwardDisabled}
          onClick={onForwardClick}
        >
          <img src={arrowRight} alt="arrow right" />
        </Button>
      </div>

      {isError && (
        <span
          className={cx(styles.AudioForm__errorMessage, {
            [styles.AudioForm__errorMessage_visible]: isError,
          })}
        >
          {errorMessage}
        </span>
      )}
    </div>
  );
};
