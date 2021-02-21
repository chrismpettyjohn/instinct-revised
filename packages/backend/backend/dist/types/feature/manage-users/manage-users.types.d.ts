import { InternalUserDTO as InternalUserDTOI } from '@instinct-prj/interface';
export declare class InternalUserDTO implements InternalUserDTOI {
    username: string;
    password: string;
    email: string;
    motto: string;
    credits: number;
    pixels: number;
    points: number;
    figure: string;
    userOfTheWeek: number;
    rankID: number;
    favoriteYoutubeVideo: string;
    homeRoom: number;
}
