import { UserGuestbookPost, UserGuestbookPostDTO } from '@instinct-prj/interface';
export interface GuestbookService {
    getAllForUser(userID: number): Promise<UserGuestbookPost[]>;
    create(userID: number, guestbookDTO: UserGuestbookPostDTO): Promise<UserGuestbookPost>;
    update(userID: number, postID: number, guestbookDTO: UserGuestbookPostDTO): Promise<UserGuestbookPost>;
    delete(userID: number, postID: number): Promise<void>;
}
