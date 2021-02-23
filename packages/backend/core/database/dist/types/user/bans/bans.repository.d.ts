import { Repository } from 'typeorm';
import { UserBanEntity } from './bans.entity';
import { BaseRepository } from '../../base.repository';
export declare class UserBanRepository extends BaseRepository<UserBanEntity> {
    constructor(userBanRepo: Repository<UserBanEntity>);
}
