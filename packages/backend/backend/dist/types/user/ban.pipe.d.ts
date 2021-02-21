import { UserBanEntity, UserBanRepository } from '../database/user';
import { PipeTransform } from '@nestjs/common';
export declare class UserBanPipe implements PipeTransform {
    private readonly userBanRepo;
    constructor(userBanRepo: UserBanRepository);
    transform(banID: number): Promise<UserBanEntity>;
}
