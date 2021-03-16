export interface EmailPreferencesState {
  email: string;
  password: string;
  showError: boolean;
  showSpinner: boolean;
  showCompletion: boolean;
}

export const defaultEmailPreferencesState: EmailPreferencesState = {
  email: '',
  password: '',
  showError: false,
  showSpinner: false,
  showCompletion: false,
};
