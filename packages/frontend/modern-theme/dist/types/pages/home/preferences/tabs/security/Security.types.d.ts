export interface SecurityPreferencesState {
    currentPassword: string;
    newPassword: string;
    newPasswordAgain: string;
    showError: boolean;
    showSpinner: boolean;
    showCompletion: boolean;
}
export declare const defaultSecurityPreferencesState: SecurityPreferencesState;
