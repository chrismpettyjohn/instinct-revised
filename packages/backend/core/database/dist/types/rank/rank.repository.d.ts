import { Repository } from 'typeorm';
import { RankEntity } from './rank.entity';
import { BaseRepository } from '../base.repository';
export declare class RankRepository extends BaseRepository<RankEntity> {
    constructor(rankRepo: Repository<RankEntity>);
    create(rank: RankEntity): Promise<RankEntity>;
    getAll(): Promise<RankEntity[]>;
    getStaff(): Promise<RankEntity[]>;
}
