import { ButtonHTMLAttributes, PropsWithChildren, ReactNode } from 'react';

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  isDisabled?: boolean;
  className?: string;
}

export type TButtonPropsWithChildren = PropsWithChildren<IButton>;
