import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import cn from 'classnames/bind';
import { ToastLayout } from './constants/layouts';
import { ToastProps, ToastTypes } from './types';
import 'react-toastify/dist/ReactToastify.css';
import styles from './Toast.module.scss';

export const callToast = (toastType: ToastTypes, message: string) => {
  const ToastBody = ToastLayout[toastType];
  toast.success(<ToastBody message={message} />);
};

const cx = cn.bind(styles);
export const Toast = ({ className, ...props }: ToastProps) => {
  return (
    <div className={cx(styles.Toast, className)}>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
        theme="light"
        className={styles.Toast__container}
        {...props}
        closeButton={false}
      />
    </div>
  );
};
