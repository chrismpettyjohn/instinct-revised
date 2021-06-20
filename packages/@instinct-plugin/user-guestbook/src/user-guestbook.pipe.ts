import {PipeTransform, Injectable, NotFoundException} from '@nestjs/common';
import {
  UserGuestbookEntity,
  UserGuestbookRepository,
} from '@instinct-api/database';

@Injectable()
export class UserGuestbookPipe implements PipeTransform {
  constructor(private readonly guestbookRepo: UserGuestbookRepository) {}

  async transform(guestbookID: number): Promise<UserGuestbookEntity> {
    const post = await this.guestbookRepo.findOne({id: guestbookID});

    if (!post) {
      throw new NotFoundException('Guestbook post does not exist');
    }

    return post;
  }
}
