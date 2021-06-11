export interface LoginState {
  username: string;
  password: string;
  showError: boolean;
  showSpinner: boolean;
}

export const defaultLoginState: LoginState = {
  username: '',
  password: '',
  showError: false,
  showSpinner: false,
};
