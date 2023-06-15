import React, { FC } from 'react';
import cn from 'classnames/bind';
import { TInputPropsWithChildren } from './types';
import warning from '@/assets/icons/warning.svg';
import styles from './Input.module.scss';

const cx = cn.bind(styles);

export const Input: FC<TInputPropsWithChildren> = ({
  className,
  onChange,
  isError,
  children,
  ...props
}: TInputPropsWithChildren) => {
  return (
    <div className={cx(styles.Input__wrapper, className)}>
      <input
        {...props}
        className={cx(styles.Input__element, {
          [styles.Input__element_error]: isError,
        })}
        onChange={onChange}
      />
      {isError && (
        <img
          src={warning}
          alt="error-image"
          className={styles.Input__errorIcon}
        />
      )}

      {children}
    </div>
  );
};
