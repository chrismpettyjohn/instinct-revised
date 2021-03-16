export interface ForgotPasswordProps {
  isOpen: boolean;
  onToggle?: () => void;
}

export interface ForgotPasswordState {
  email: string;
  showError: boolean;
  showSpinner: boolean;
  showCompletion: boolean;
}

export const defaultForgotPasswordState: ForgotPasswordState = {
  email: '',
  showError: false,
  showSpinner: false,
  showCompletion: false,
};
