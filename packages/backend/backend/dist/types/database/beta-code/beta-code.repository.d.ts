import { Repository } from 'typeorm';
import { BetaCodeEntity } from './beta-code.entity';
import { BaseRepository } from '../base.repository';
export declare class BetaCodeRepository extends BaseRepository<BetaCodeEntity> {
    constructor(betaCodeEntity: Repository<BetaCodeEntity>);
}
