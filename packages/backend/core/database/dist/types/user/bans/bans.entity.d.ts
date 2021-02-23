import { UserEntity } from '../user/user.entity';
export declare class UserBanEntity {
    id?: number;
    userID: number;
    user?: UserEntity;
    ipAddress: string;
    banReason: string;
    machineID: string;
    staffID: number;
    staffMember?: UserEntity;
    banStartedTimestamp: number;
    banExpirationTimestamp: number;
}
