import React, { FC } from 'react';
import cn from 'classnames/bind';
import { ButtonPropsWithChildren } from './types';
import styles from './Button.module.scss';

const cx = cn.bind(styles);

export const Button: FC<ButtonPropsWithChildren> = ({
  className,
  isDisabled,
  children,
  ...props
}: ButtonPropsWithChildren) => {
  return (
    <button
      disabled={isDisabled}
      {...props}
      className={cx(styles.Button, className)}
    >
      {children}
    </button>
  );
};
