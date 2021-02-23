export interface ForgotPasswordModalProps {
  isOpen: boolean;
  onToggle?: () => void;
}

export interface ForgotPasswordModalState {
  email: string;
  showError: boolean;
  showSpinner: boolean;
  showCompletion: boolean;
}

export const defaultForgotPasswordModalState: ForgotPasswordModalState = {
  email: '',
  showError: false,
  showSpinner: false,
  showCompletion: false,
};
