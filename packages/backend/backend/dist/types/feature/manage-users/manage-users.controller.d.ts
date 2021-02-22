import { InternalUser } from '@instinct-prj/interface';
import { UserEntity } from '../../database/user/user/user.entity';
import { UserRepository } from '../../database/user/user/user.repository';
import { InternalUserDTO, UpdateInternalUserDTO } from './manage-users.types';
export declare class ManageUsersController {
    private readonly userRepo;
    constructor(userRepo: UserRepository);
    getAll(): Promise<InternalUser[]>;
    createUser(userDTO: InternalUserDTO): Promise<InternalUser>;
    updateUser(user: UserEntity, userDTO: UpdateInternalUserDTO): Promise<InternalUser>;
    deleteUser(user: UserEntity): Promise<string>;
}
