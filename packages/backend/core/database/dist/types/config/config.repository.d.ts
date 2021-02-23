import { ConfigEntity } from './config.entity';
import { BaseRepository } from '../base.repository';
import { FindConditions, Repository } from 'typeorm';
export declare class ConfigRepository extends BaseRepository<ConfigEntity> {
    private readonly cache;
    constructor(configRepo: Repository<ConfigEntity>);
    update(conditions: FindConditions<ConfigEntity>, changes: Partial<ConfigEntity>): Promise<void>;
    getConfig(noCache?: boolean): Promise<ConfigEntity>;
}
