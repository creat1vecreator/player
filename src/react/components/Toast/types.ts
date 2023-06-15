import React, { FC } from 'react';
import { ToastContainerProps } from 'react-toastify/dist/types';

export interface ToastProps
  extends React.ForwardRefExoticComponent<
    ToastContainerProps & React.RefAttributes<HTMLDivElement>
  > {
  className?: string;
}

export enum ToastTypes {
  warning = 'warning',
}

export interface IToastInnerProps {
  message: string;
}
