import { PipeTransform } from '@nestjs/common';
import { UserGuestbookEntity } from '../../database/user/guestbook/guestbook.entity';
import { UserGuestbookRepository } from '../../database/user/guestbook/guestbook.repository';
export declare class UserGuestbookPipe implements PipeTransform {
    private readonly guestbookRepo;
    constructor(guestbookRepo: UserGuestbookRepository);
    transform(guestbookID: number): Promise<UserGuestbookEntity>;
}
