import { UserEntity } from './user.entity';
import { InternalUser, User } from '@instinct-prj/interface';
export declare function userWire(userEntity: UserEntity): User;
export declare function internalUserWire(userEntity: UserEntity): InternalUser;
