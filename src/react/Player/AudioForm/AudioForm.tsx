import React, { ChangeEvent, FC, KeyboardEvent, useState } from 'react';
import cn from 'classnames/bind';
import { IAudioForm } from './types';
import arrowRight from '@/assets/icons/arrowRight.svg';
import styles from './AudioForm.module.scss';

import { Dropdown } from '@/react/components/Dropdown';
import { TDropdownItem } from '@/react/components/Dropdown/types';
import { Button } from '@/react/ui-components/Button/Button';
import { Input } from '@/react/ui-components/Input';

const cx = cn.bind(styles);

export const AudioForm: FC<IAudioForm> = ({
  inputValue,
  handleInputValue,
  onForwardClick,
  isForwardDisabled,
  error,
  getEnteredLinks,
}: IAudioForm) => {
  const { isErrorVisible, errorMessage } = error;
  const isError = isErrorVisible && Boolean(errorMessage);
  const enteredLinks = getEnteredLinks();

  const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false);

  const onInputKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onForwardClick();
    }
  };
  const onClickDropdownItem = (item: TDropdownItem) => {
    const event = {
      target: { value: item },
    };

    handleInputValue(event as ChangeEvent<HTMLInputElement>);
  };

  const toggleDropDownVisibility = async () => {
    await setTimeout(() => {
      setIsDropdownVisible(!isDropdownVisible);
    }, 100);
  };

  return (
    <div className={styles.AudioForm}>
      <div className={styles.AudioForm__title}>Insert the link</div>

      <div className={styles.AudioForm__form}>
        <Input
          onFocus={toggleDropDownVisibility}
          onBlur={toggleDropDownVisibility}
          onKeyDown={onInputKeyDown}
          value={inputValue}
          onChange={handleInputValue}
          placeholder="https://"
          className={styles.AudioForm__input}
          isError={isError}
        >
          {isDropdownVisible && enteredLinks.length > 0 && (
            <Dropdown
              dropdownItems={getEnteredLinks()}
              onClickItem={onClickDropdownItem}
              targetItem="mock"
              className={styles.AudioForm__dropdown}
            />
          )}
        </Input>
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
