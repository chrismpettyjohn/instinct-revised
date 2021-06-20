import {Figure} from './figure-selector/FigureSelector.types';

export interface RegisterState {
  username: string;
  email: string;
  password: string;
  passwordAgain: string;
  figure?: Figure;
  betaCode: string;
  captcha?: string;
  showError: boolean;
  showSpinner: boolean;
}

export const defaultRegisterState: RegisterState = {
  username: '',
  email: '',
  password: '',
  passwordAgain: '',
  betaCode: '',
  figure: undefined,
  captcha: undefined,
  showError: false,
  showSpinner: false,
};
