import { ChangeEvent, InputHTMLAttributes, PropsWithChildren } from 'react';

interface IInput
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  isError?: boolean;
  className?: string;
}

export type TInputPropsWithChildren = PropsWithChildren<IInput>;
