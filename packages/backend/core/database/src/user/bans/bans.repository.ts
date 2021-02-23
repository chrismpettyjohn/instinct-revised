import {Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {UserBanEntity} from './bans.entity';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from '../../base.repository';

@Injectable()
export class UserBanRepository extends BaseRepository<UserBanEntity> {
  constructor(
    @InjectRepository(UserBanEntity) userBanRepo: Repository<UserBanEntity>
  ) {
    super(userBanRepo, ['user', 'staffMember']);
  }
}
