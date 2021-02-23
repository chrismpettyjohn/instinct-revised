import { Repository } from 'typeorm';
import { BaseRepository } from '../../base.repository';
import { UserForgotPasswordEntity } from './forgot-password.entity';
export declare class UserForgotPasswordRepository extends BaseRepository<UserForgotPasswordEntity> {
    constructor(userForgotPasswordRepo: Repository<UserForgotPasswordEntity>);
}
