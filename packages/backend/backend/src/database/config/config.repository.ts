import NodeCache from 'node-cache';
import {Injectable} from '@nestjs/common';
import {ConfigEntity} from './config.entity';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from '../base.repository';
import {FindConditions, Repository} from 'typeorm';

@Injectable()
export class ConfigRepository extends BaseRepository<ConfigEntity> {
  private readonly cache: NodeCache;

  constructor(
    @InjectRepository(ConfigEntity) configRepo: Repository<ConfigEntity>
  ) {
    super(configRepo, []);
    this.cache = new NodeCache();
  }

  async update(
    conditions: FindConditions<ConfigEntity>,
    changes: Partial<ConfigEntity>
  ): Promise<void> {
    await super.update({}, changes);
    this.cache.del('config');
  }

  async getConfig(noCache?: boolean): Promise<ConfigEntity> {
    const cachedConfig: ConfigEntity | undefined = this.cache.get('config');

    if (cachedConfig && !noCache) {
      return cachedConfig;
    }

    const freshCache = await this.findOneOrFail();
    this.cache.set('config', freshCache);
    return freshCache;
  }
}
