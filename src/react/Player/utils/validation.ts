import { IAudioFormError } from '../types';

import { PATTERNS } from '@/constants/patterns';

export const checkIsEmpty = (link: string) => !link;

export const checkIsLink = (link: string) =>
  link.match(PATTERNS.isStartingWithHttps);

export const validationError = (linkValue: string): IAudioFormError => {
  if (checkIsEmpty(linkValue))
    return {
      isError: true,
      isErrorVisible: false,
      errorMessage: 'Ссылка не может быть пустой',
    };

  if (!checkIsEmpty(linkValue) && !checkIsLink(linkValue))
    return {
      isError: true,
      isErrorVisible: false,
      errorMessage: 'Ссылка должна начинаться с https',
    };

  return {
    isError: false,
    isErrorVisible: false,
    errorMessage: '',
  };
};
