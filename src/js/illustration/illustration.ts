import { containerToSetIllustration } from './selectors';
import illustration from '@/assets/icons/Illustration.png';

const illustrationElement = document.createElement('img');
illustrationElement.setAttribute('src', illustration);

const targetElem = document.querySelector(containerToSetIllustration);
targetElem.appendChild(illustrationElement);
