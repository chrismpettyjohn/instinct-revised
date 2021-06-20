import {User, exampleUser} from '../user/User';
import {Room, exampleRoom} from '../room/Room';
import {Badge, exampleBadge} from '../badge/Badge';
import {Group, exampleGroup} from '../group/Group';

export interface UserProfile {
  user: User;
  rooms: Room[];
  badges: Badge[];
  friends: User[];
  groups: Group[];
}

export const exampleUserProfile: UserProfile = {
  user: exampleUser,
  rooms: [exampleRoom],
  badges: [exampleBadge],
  friends: [],
  groups: [exampleGroup],
};
