import { User } from '../user/User';
export interface Room {
    id: number;
    user?: User;
    name: string;
    desc: string;
    currentUsers: number;
    maxUsers: number;
}
export declare type RoomKeys = keyof Room;
export declare const exampleRoom: Room;
