import React, { FC } from 'react';
import { IToastInnerProps, ToastTypes } from '../types';
import close from '@/assets/icons/close.svg';
import warning from '@/assets/icons/warningToast.svg';
import styles from '../Toast.module.scss';

export const ToastLayout: Record<ToastTypes, FC<IToastInnerProps>> = {
  [ToastTypes.warning]: ({ message }: IToastInnerProps) => (
    <div className={styles.Toast__contentWrapper}>
      <div className={styles.Toast__messageAndTypeIcon}>
        <img src={warning} alt="close" />
        <div className={styles.Toast__typeAndTextWrapper}>
          <div className={styles.Toast__messageType}>Warning</div>
          <div className={styles.Toast__messageText}>{message}</div>
        </div>
      </div>
      <img src={close} alt="close" />
    </div>
  ),
};
