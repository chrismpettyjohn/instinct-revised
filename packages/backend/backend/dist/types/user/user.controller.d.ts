import { UserDTOClass } from './user.dto';
import { ConfigRepository } from '../database/config';
import { BetaCodeRepository } from '../database/beta-code';
import { Room, User, UserProfile } from '@instinct-prj/interface';
import { UserEntity, UserRepository } from '../database';
export declare class UserController {
    private readonly configRepo;
    private readonly userRepo;
    private readonly betaCodeRepo;
    constructor(configRepo: ConfigRepository, userRepo: UserRepository, betaCodeRepo: BetaCodeRepository);
    getOnlineUsers(): Promise<User[]>;
    getUserOfTheWeek(): Promise<User[]>;
    createUser(newUser: UserDTOClass, ipAddress: string): Promise<User>;
    getUserByID(user: UserEntity): User;
    getRoomsByUserID(user: UserEntity): Promise<Room[]>;
    getUserByUsername(username: string): Promise<UserProfile>;
}
