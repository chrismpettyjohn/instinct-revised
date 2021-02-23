import { User } from '../user/User';
import { Room } from '../room/Room';
import { Badge } from '../badge/Badge';
import { Group } from '../group/Group';
export interface UserProfile {
    user: User;
    rooms: Room[];
    badges: Badge[];
    friends: User[];
    groups: Group[];
}
export declare const exampleUserProfile: UserProfile;
