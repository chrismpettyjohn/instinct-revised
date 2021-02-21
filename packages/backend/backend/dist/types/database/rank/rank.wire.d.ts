import { RankEntity } from './rank.entity';
import { Rank, RankDTO } from '@instinct-prj/interface';
export declare function rankWire(rankEntity: RankEntity): Rank;
export declare function rankDataTransferObjectToEntity(rankDTO: RankDTO): RankEntity;
