import { UserEntity } from '../user/user/user.entity';
export declare class BetaCodeEntity {
    id?: number;
    betaCode: string;
    userID?: number;
    user?: UserEntity;
}
