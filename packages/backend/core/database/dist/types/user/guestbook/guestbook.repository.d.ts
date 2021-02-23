import { Repository } from 'typeorm';
import { BaseRepository } from '../../base.repository';
import { UserGuestbookEntity } from './guestbook.entity';
export declare class UserGuestbookRepository extends BaseRepository<UserGuestbookEntity> {
    constructor(userGuestbookRepo: Repository<UserGuestbookEntity>);
}
