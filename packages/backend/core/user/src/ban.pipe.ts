import {UserBanEntity, UserBanRepository} from '@instinct-api/database';
import {PipeTransform, Injectable, NotFoundException} from '@nestjs/common';

@Injectable()
export class UserBanPipe implements PipeTransform {
  constructor(private readonly userBanRepo: UserBanRepository) {}

  async transform(banID: number): Promise<UserBanEntity> {
    try {
      return await this.userBanRepo.findOneOrFail({id: banID});
    } catch {
      throw new NotFoundException('Ban does not exist');
    }
  }
}
