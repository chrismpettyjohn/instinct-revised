import {User} from '../user/User';
import {examplePermissions, Permissions} from '../rank/Permissions';

export interface Rank {
  id: number;
  name: string;
  badge: string;
  users?: User[];
  permissions: Permissions;
}

export const exampleRank: Rank = {
  id: 1,
  name: 'Developers',
  badge: 'ADM',
  users: [],
  permissions: examplePermissions,
};
