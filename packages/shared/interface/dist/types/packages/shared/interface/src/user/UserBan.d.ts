import { User } from './User';
export interface UserBan {
    id: number;
    user: User;
    bannedBy: User;
    banStart: number;
    banEnd: number;
    banReason: string;
}
export declare const exampleUserBan: UserBan;
