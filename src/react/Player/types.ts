export enum PlayerSections {
  form = 'form',
  player = 'player',
}

export interface ILink {
  link: string;
}

export interface IAudioFormError {
  isError: boolean;
  errorMessage: string;
  isErrorVisible: boolean;
}
