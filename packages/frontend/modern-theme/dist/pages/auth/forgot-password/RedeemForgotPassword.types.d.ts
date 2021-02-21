export interface RedeemForgotPasswordState {
    password: string;
    passwordAgain: string;
    showError: boolean;
    showSpinner: boolean;
    showCompletion: boolean;
}
export declare const defaultForgotPasswordState: RedeemForgotPasswordState;
