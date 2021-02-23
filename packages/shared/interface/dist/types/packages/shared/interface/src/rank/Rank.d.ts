import { User } from '../user/User';
import { Permissions } from '../rank/Permissions';
export interface Rank {
    id: number;
    name: string;
    badge: string;
    users?: User[];
    permissions: Permissions;
}
export declare const exampleRank: Rank;
