import {UserEntity, UserRepository} from '@instinct-api/database';
import {PipeTransform, Injectable, NotFoundException} from '@nestjs/common';

@Injectable()
export class UserPipe implements PipeTransform {
  constructor(private readonly userRepo: UserRepository) {}

  async transform(userID: number): Promise<UserEntity> {
    const user = await this.userRepo.findOne({id: userID});

    if (!user) {
      throw new NotFoundException('User does not exist');
    }

    return user;
  }
}
