export interface RegisterState {
    username: string;
    email: string;
    password: string;
    passwordAgain: string;
    betaCode: string;
    captcha?: string;
    showError: boolean;
    showSpinner: boolean;
}
export declare const defaultRegisterState: RegisterState;
