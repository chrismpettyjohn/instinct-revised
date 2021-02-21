export interface LoginState {
    username: string;
    password: string;
    showError: boolean;
    showSpinner: boolean;
}
export declare const defaultLoginState: LoginState;
