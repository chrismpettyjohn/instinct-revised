import { UserBan } from './UserBan';
export interface UserBanDTO {
    userID: number;
    reason: string;
    banStart: number;
    banEnd: number;
}
export declare const exampleBanDTO: UserBanDTO;
export declare function banWireToBanDTO(banWire: UserBan): UserBanDTO;
