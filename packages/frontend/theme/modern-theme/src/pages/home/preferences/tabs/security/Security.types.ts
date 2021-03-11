export interface SecurityPreferencesState {
  currentPassword: string;
  newPassword: string;
  newPasswordAgain: string;
  showError: boolean;
  showSpinner: boolean;
  showCompletion: boolean;
}

export const defaultSecurityPreferencesState: SecurityPreferencesState = {
  currentPassword: '',
  newPassword: '',
  newPasswordAgain: '',
  showError: false,
  showSpinner: false,
  showCompletion: false,
};
