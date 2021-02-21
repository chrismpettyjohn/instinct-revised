import { UserGuestbookPost } from '@instinct-prj/interface';
import { UserGuestbookPostDTO } from './user-guestbook.dto';
import { UserEntity } from '../../database/user/user/user.entity';
import { UserGuestbookEntity } from '../../database/user/guestbook/guestbook.entity';
import { UserGuestbookRepository } from '../../database/user/guestbook/guestbook.repository';
export declare class UserGuestbookController {
    private readonly guestbookRepo;
    constructor(guestbookRepo: UserGuestbookRepository);
    createPost(user: UserEntity, session: UserEntity, guestbookDTO: UserGuestbookPostDTO): Promise<UserGuestbookPost>;
    getPosts(user: UserEntity): Promise<UserGuestbookPost[]>;
    updatePost(post: UserGuestbookEntity, user: UserEntity, guestbookDTO: UserGuestbookPostDTO): Promise<string>;
    deletePost(post: UserGuestbookEntity, user: UserEntity): Promise<string>;
}
