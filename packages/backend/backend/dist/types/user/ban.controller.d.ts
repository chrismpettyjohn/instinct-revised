import { UserBan, UserBanDTO } from '@instinct-prj/interface';
import { UserBanDTOClass } from './ban.dto';
import { UserBanRepository, UserEntity, UserRepository } from '../database/user';
export declare class UserBanController {
    private readonly userRepo;
    private readonly userBanRepo;
    constructor(userRepo: UserRepository, userBanRepo: UserBanRepository);
    createBan(ban: UserBanDTOClass, session: UserEntity): Promise<UserBan>;
    getAllBans(): Promise<UserBan[]>;
    getBanByID(banID: number): Promise<UserBan>;
    updateBanByID(banID: number, banDTO: UserBanDTO): Promise<string>;
    deleteBanByID(banID: number): Promise<string>;
}
