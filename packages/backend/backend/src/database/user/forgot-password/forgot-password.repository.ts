import {Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from '../../base.repository';
import {UserForgotPasswordEntity} from './forgot-password.entity';

@Injectable()
export class UserForgotPasswordRepository extends BaseRepository<UserForgotPasswordEntity> {
  constructor(
    @InjectRepository(UserForgotPasswordEntity)
    userForgotPasswordRepo: Repository<UserForgotPasswordEntity>
  ) {
    super(userForgotPasswordRepo, []);
  }
}
