export interface LoginModalState {
    username: string;
    password: string;
    error?: string;
    showSpinner: boolean;
}
export declare const defaultLoginModalState: LoginModalState;
