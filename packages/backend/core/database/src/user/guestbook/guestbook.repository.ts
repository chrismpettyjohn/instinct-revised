import {Repository} from 'typeorm';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from '../../base.repository';
import {UserGuestbookEntity} from './guestbook.entity';

export class UserGuestbookRepository extends BaseRepository<UserGuestbookEntity> {
  constructor(
    @InjectRepository(UserGuestbookEntity)
    userGuestbookRepo: Repository<UserGuestbookEntity>
  ) {
    super(userGuestbookRepo, ['profile', 'author']);
  }
}
