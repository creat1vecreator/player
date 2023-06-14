import { IAudioComponent } from '../types';

import { ISlider } from '@/react/components/Slider/types';

export type IAudio = Pick<IAudioComponent, 'src'>;

export type ISliderControls = Pick<ISlider, 'progress' | 'setProgress'>;
