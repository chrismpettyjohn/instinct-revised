import { User } from '../user/User';
export interface Group {
    id: number;
    name: string;
    desc: string;
    user?: User;
    badge: string;
    roomID: number;
    dateCreated: string;
}
export declare const exampleGroup: Group;
