import { RankEntity, RankRepository } from '../database/rank';
import { PipeTransform } from '@nestjs/common';
export declare class RankPipe implements PipeTransform {
    private readonly rankRepo;
    constructor(rankRepo: RankRepository);
    transform(rankID: number): Promise<RankEntity>;
}
