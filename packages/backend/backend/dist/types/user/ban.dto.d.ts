import { UserBanEntity } from '../database/user';
import { UserBanDTO } from '@instinct-prj/interface';
export declare class UserBanDTOClass implements UserBanDTO {
    userID: number;
    reason: string;
    banStart: number;
    banEnd: number;
}
export declare function userBanDataTransferObjectToEntity(userBanDTO: UserBanDTO): Partial<UserBanEntity>;
