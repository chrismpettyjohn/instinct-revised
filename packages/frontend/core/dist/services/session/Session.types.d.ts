import { User } from '@instinct-prj/interface';
export interface SessionService {
    init(): Promise<User | undefined>;
    attemptCredentials(username: string, password: string): Promise<string>;
    attemptBearerToken(authToken: string): Promise<User>;
    createSSO(): Promise<string>;
    getCurrentUser(): Promise<User>;
    logout(): void;
    updateProfile(favoriteYoutubeVideo: string): Promise<void>;
    updateEmail(currentPassword: string, newEmail: string): Promise<void>;
    updatePassword(currentPassword: string, newPassword: string, newPasswordAgain: string): Promise<void>;
    generateForgotPasswordToken(email: string): Promise<void>;
    redeemForgotPasswordToken(token: string, password: string, passwordAgain: string): Promise<void>;
}
