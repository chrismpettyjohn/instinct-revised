import { InternalUserDTO } from './manage-users.types';
import { InternalUser } from '@instinct-prj/interface';
import { UserEntity } from '../../database/user/user/user.entity';
import { UserRepository } from '../../database/user/user/user.repository';
export declare class ManageUsersController {
    private readonly userRepo;
    constructor(userRepo: UserRepository);
    getAll(): Promise<InternalUser[]>;
    createUser(userDTO: InternalUserDTO): Promise<InternalUser>;
    updateUser(user: UserEntity, userDTO: InternalUserDTO): Promise<InternalUser>;
    deleteUser(user: UserEntity): Promise<string>;
}
