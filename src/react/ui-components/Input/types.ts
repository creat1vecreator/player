import { ChangeEvent, InputHTMLAttributes } from 'react';

export interface IInput
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  isError?: boolean;
  className?: string;
}
