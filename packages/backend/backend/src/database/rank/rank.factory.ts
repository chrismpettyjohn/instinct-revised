import {getRepository} from 'typeorm';
import {RankEntity} from './rank.entity';

export function rankFactory(
  changes?: Partial<RankEntity>
): Promise<RankEntity> {
  return getRepository(RankEntity).save({
    name: 'Testing',
    badge: 'BETA',
    level: 1,
    ...changes,
  });
}
