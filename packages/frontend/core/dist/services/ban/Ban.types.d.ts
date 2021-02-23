import { UserBan, UserBanDTO } from '@instinct-prj/interface';
export interface BanService {
    create(banDTO: UserBanDTO): Promise<UserBan>;
    getAll(): Promise<UserBan[]>;
    getByID(banID: string): Promise<UserBan>;
    updateByID(banID: string, banDTO: UserBanDTO): Promise<void>;
    deleteByID(banID: string): Promise<void>;
}
