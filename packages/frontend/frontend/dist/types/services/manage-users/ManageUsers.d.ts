import { ManageUsersService } from './ManageUsers.types';
import { InternalUser, InternalUserDTO } from '@instinct-prj/interface';
export declare class ManageUsersServiceImplementation implements ManageUsersService {
    getAll(): Promise<InternalUser[]>;
    create(internalUserDTO: InternalUserDTO): Promise<InternalUser>;
    update(userID: number, internalUserDTO: Partial<InternalUserDTO>): Promise<InternalUser>;
    delete(userID: number): Promise<void>;
}
