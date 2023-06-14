import React from 'react';
import ReactDOM from 'react-dom/client';
import { Player } from './Player';

const root = ReactDOM.createRoot(
  document.querySelector('.Task__component') as HTMLElement,
);

root.render(<Player />);
