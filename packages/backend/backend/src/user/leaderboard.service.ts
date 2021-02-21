import {Injectable} from '@nestjs/common';
import {UserEntity} from '../database/user';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository, SelectQueryBuilder} from 'typeorm';

@Injectable()
export class UserLeaderBoardService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>
  ) {}

  getMostCredits(limit = 10): Promise<UserEntity[]> {
    return this.queryBuilder()
      .orderBy('user.credits', 'DESC')
      .limit(limit)
      .getMany();
  }

  getMostPixels(limit = 10): Promise<UserEntity[]> {
    return this.queryBuilder()
      .orderBy('user.pixels', 'DESC')
      .limit(limit)
      .getMany();
  }

  getMostPoints(limit = 10): Promise<UserEntity[]> {
    return this.queryBuilder()
      .orderBy('user.points', 'DESC')
      .limit(limit)
      .getMany();
  }

  private queryBuilder(): SelectQueryBuilder<UserEntity> {
    return this.userRepository
      .createQueryBuilder('user')
      .innerJoin('user.rank', 'rank', 'rank.websiteShowStaff = :showStaff', {
        showStaff: '0',
      });
  }
}
