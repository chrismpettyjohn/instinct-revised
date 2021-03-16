export interface RedeemForgotPasswordState {
  password: string;
  passwordAgain: string;
  showError: boolean;
  showSpinner: boolean;
  showCompletion: boolean;
}

export const defaultForgotPasswordState: RedeemForgotPasswordState = {
  password: '',
  passwordAgain: '',
  showError: false,
  showSpinner: false,
  showCompletion: false,
};
