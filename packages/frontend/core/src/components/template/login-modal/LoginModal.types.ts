export interface LoginModalState {
  username: string;
  password: string;
  error?: string;
  showSpinner: boolean;
}

export const defaultLoginModalState: LoginModalState = {
  username: '',
  password: '',
  error: undefined,
  showSpinner: false,
};
