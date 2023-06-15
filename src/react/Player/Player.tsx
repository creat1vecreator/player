import React, { ChangeEvent, useState } from 'react';
import { AudioComponent } from './AudioComponent';
import { AudioForm } from './AudioForm';
import { IAudioFormError, PlayerSections } from './types';
import { validationError } from './utils/validation';
import styles from './Player.module.scss';

import { callToast } from '@/react/components/Toast';
import { ToastTypes } from '@/react/components/Toast/types';

export const Player = () => {
  const [link, setLink] = useState<string>('');
  const [section, setSection] = useState<PlayerSections>(PlayerSections.form);
  const [error, setError] = useState<IAudioFormError>({
    isError: true,
    isErrorVisible: false,
    errorMessage: 'Ссылка должна начинаться с https',
  });

  const onChangeLink = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setError(validationError(value));
    setLink(value);
  };

  const toggleSection = () =>
    setSection(() =>
      section === PlayerSections.form
        ? PlayerSections.player
        : PlayerSections.form,
    );

  const handleChangeSection = async () => {
    // if (section === PlayerSections.form) {
    //   if (!error.isError) toggleSection();
    //   else setError({ ...error, isErrorVisible: true });
    // } else toggleSection();

    try {
      const response = await fetch(link);
      console.log(response);
    } catch (e) {
      callToast(ToastTypes.warning, 'error');
    }
  };

  return (
    <div className={styles.Player}>
      {section === PlayerSections.form ? (
        <AudioForm
          inputValue={link}
          handleInputValue={onChangeLink}
          isForwardDisabled={false}
          onForwardClick={handleChangeSection}
          error={error}
        />
      ) : (
        <AudioComponent src={link} onBackClick={handleChangeSection} />
      )}
    </div>
  );
};
