import { UserEntity } from '../database/user';
import { Repository } from 'typeorm';
export declare class UserLeaderBoardService {
    private readonly userRepository;
    constructor(userRepository: Repository<UserEntity>);
    getMostCredits(limit?: number): Promise<UserEntity[]>;
    getMostPixels(limit?: number): Promise<UserEntity[]>;
    getMostPoints(limit?: number): Promise<UserEntity[]>;
    private queryBuilder;
}
