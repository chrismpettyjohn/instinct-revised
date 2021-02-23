import { User } from '../user/User';
export interface Photo {
    id: number;
    createdAt: number;
    userID: number;
    user?: User;
    roomID: number;
    imagePath: string;
}
export declare const examplePhoto: Photo;
