export interface ISlider {
  progress: number;
  setProgress: (progressValue: number) => void;
  styles?: {
    wrapperStyles?: string;
    dotStyles?: string;
    lineStyles?: string;
    progressStyles?: string;
  };
}
