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
export declare const defaultForgotPasswordModalState: ForgotPasswordModalState;
