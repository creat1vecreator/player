import React from 'react';
import ReactDOM from 'react-dom/client';
import { Player } from './Player';

import { Toast } from '@/react/components/Toast';

const root = ReactDOM.createRoot(
  document.querySelector('.Task__component') as HTMLElement,
);

root.render(
  <>
    <Toast />
    <Player />
  </>,
);
