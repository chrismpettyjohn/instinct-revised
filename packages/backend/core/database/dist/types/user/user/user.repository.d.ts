import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { BaseRepository } from '../../base.repository';
import { HashService } from '@instinct-api/common';
export declare class UserRepository extends BaseRepository<UserEntity> {
    private readonly hashService;
    readonly eagerRelations: Array<keyof UserEntity>;
    constructor(userRepository: Repository<UserEntity>, hashService: HashService);
    create(user: UserEntity): Promise<UserEntity>;
    createSSO(userID: number): Promise<string>;
}
