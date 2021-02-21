import { Rank } from '../rank/Rank';
export interface User {
    id: number;
    username: string;
    motto: string;
    credits: number;
    pixels: number;
    points: number;
    online: boolean;
    figure: string;
    favoriteYoutubeVideo: string;
    joinDate: string;
    lastLoginDate: string;
    userOfTheWeek: boolean;
    rank?: Omit<Rank, 'users'>;
}
export declare const exampleUser: User;
export interface InternalUser extends Omit<User, 'joinDate' | 'lastLoginDate' | 'rank'> {
    email: string;
    rankID: number;
}
export interface InternalUserDTO extends Partial<Omit<InternalUser, 'userOfTheWeek'>> {
    userOfTheWeek: number;
    password: string;
}
