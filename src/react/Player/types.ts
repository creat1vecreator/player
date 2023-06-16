export enum PlayerSections {
  form = 'form',
  player = 'player',
}

export interface IAudioFormError {
  isError: boolean;
  errorMessage: string;
  isErrorVisible: boolean;
}
