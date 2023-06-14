import { ChangeEvent } from 'react';
import { IAudioFormError } from '../types';

export interface IAudioForm {
  inputValue: string;
  error: IAudioFormError;
  handleInputValue: (event: ChangeEvent<HTMLInputElement>) => void;
  isForwardDisabled: boolean;
  onForwardClick: () => void;
}
