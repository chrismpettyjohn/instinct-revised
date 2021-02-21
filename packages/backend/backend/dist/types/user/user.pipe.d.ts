import { UserEntity, UserRepository } from '../database/user';
import { PipeTransform } from '@nestjs/common';
export declare class UserPipe implements PipeTransform {
    private readonly userRepo;
    constructor(userRepo: UserRepository);
    transform(userID: number): Promise<UserEntity>;
}
