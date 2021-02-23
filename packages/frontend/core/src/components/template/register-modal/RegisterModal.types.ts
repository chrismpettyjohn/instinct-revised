export interface RegisterModalState {
  username: string;
  password: string;
  passwordAgain: string;
  email: string;
  captcha: string;
  showSpinner: boolean;
}

export const defaultRegisterModalState: RegisterModalState = {
  username: '',
  password: '',
  passwordAgain: '',
  email: '',
  captcha: '',
  showSpinner: false,
};
