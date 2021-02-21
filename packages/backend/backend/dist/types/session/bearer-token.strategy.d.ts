import { Strategy } from 'passport-jwt';
import { UserEntity, UserRepository } from '../database/user';
declare const BearerTokenStrategy_base: new (...args: any[]) => Strategy;
export declare class BearerTokenStrategy extends BearerTokenStrategy_base {
    private readonly userRepo;
    constructor(userRepo: UserRepository);
    validate({ userID }: Record<'userID', number>): Promise<UserEntity>;
}
export {};
