export interface RegisterState {
  username: string;
  email: string;
  password: string;
  passwordAgain: string;
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
  captcha: undefined,
  showError: false,
  showSpinner: false,
};
