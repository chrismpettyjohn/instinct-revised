import {User} from '@instinct-prj/interface';
import {userService} from '../../services/user';
import {createFetchHook} from '../fetch-hook.base';

export const useFetchOnlineUsers = (refresh = 0) =>
  createFetchHook<User[]>(userService.getOnline, refresh);
