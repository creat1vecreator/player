import React, { FC } from 'react';
import cn from 'classnames/bind';
import { TButtonPropsWithChildren } from './types';
import styles from './Button.module.scss';

const cx = cn.bind(styles);

export const Button: FC<TButtonPropsWithChildren> = ({
  className,
  isDisabled,
  children,
  ...props
}: TButtonPropsWithChildren) => {
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
