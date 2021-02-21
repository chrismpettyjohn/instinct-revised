import { RankDTOClass } from './rank.dto';
import { Rank } from '@instinct-prj/interface';
import { RankRepository } from '../database/rank';
import { RankEntity } from '../database/rank';
export declare class RankController {
    private readonly rankRepo;
    constructor(rankRepo: RankRepository);
    createRank(rankDTO: RankDTOClass): Promise<Rank>;
    getMany(): Promise<Rank[]>;
    getStaff(): Promise<Rank[]>;
    getByID(rank: RankEntity): Rank;
    updateByID(rank: RankEntity, rankDTO: RankDTOClass): Promise<string>;
    deleteByID(rank: RankEntity): Promise<string>;
}
