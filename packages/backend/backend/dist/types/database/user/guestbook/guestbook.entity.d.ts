import { UserEntity } from '../user/user.entity';
export declare class UserGuestbookEntity {
    id?: number;
    profileID: number;
    profile?: UserEntity;
    authorID: number;
    author?: UserEntity;
    content: string;
    timestamp: number;
}
