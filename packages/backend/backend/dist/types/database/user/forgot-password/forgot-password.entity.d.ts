import { UserEntity } from '../user/user.entity';
export declare class UserForgotPasswordEntity {
    id?: number;
    userID: number;
    user?: UserEntity;
    token: string;
    createdAt: number;
    expiresAt: number;
}
