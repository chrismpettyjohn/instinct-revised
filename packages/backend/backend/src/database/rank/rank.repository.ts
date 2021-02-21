import {Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {RankEntity} from './rank.entity';
import {PermissionStatus} from './rank.types';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from '../base.repository';

@Injectable()
export class RankRepository extends BaseRepository<RankEntity> {
  constructor(@InjectRepository(RankEntity) rankRepo: Repository<RankEntity>) {
    super(rankRepo, ['users']);
  }

  async create(rank: RankEntity): Promise<RankEntity> {
    const newRank = await super.create(rank);
    return this.findOneOrFail({id: newRank.id!});
  }

  getAll(): Promise<RankEntity[]> {
    return this.find({}, {id: 'DESC'});
  }

  getStaff(): Promise<RankEntity[]> {
    return this.repo.find({
      where: {
        websiteShowStaff: PermissionStatus.Enabled,
      },
      order: {
        id: 'DESC',
      },
      relations: this.eagerRelations,
    });
  }
}
