import { User } from './User';
export interface UserGuestbookPost {
    id: number;
    profileID: number;
    author: User;
    content: string;
    timestamp: number;
}
export declare const exampleUserGuestbookPost: UserGuestbookPost;
export interface UserGuestbookPostDTO {
    content: string;
}
