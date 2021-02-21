import { Repository } from 'typeorm';
import { HashService } from '../../../common';
import { UserEntity } from './user.entity';
import { BaseRepository } from '../../base.repository';
export declare class UserRepository extends BaseRepository<UserEntity> {
    private readonly hashService;
    readonly eagerRelations: Array<keyof UserEntity>;
    constructor(userRepository: Repository<UserEntity>, hashService: HashService);
    create(user: UserEntity): Promise<UserEntity>;
    createSSO(userID: number): Promise<string>;
}
