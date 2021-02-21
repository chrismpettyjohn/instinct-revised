import { InternalUser, InternalUserDTO } from '@instinct-prj/interface';
export interface ManageUsersService {
    getAll(): Promise<InternalUser[]>;
    create(internalUserDTO: InternalUserDTO): Promise<InternalUser>;
    update(userID: number, internalUserDTO: Partial<InternalUserDTO>): Promise<InternalUser>;
    delete(userID: number): Promise<void>;
}
