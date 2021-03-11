import {User} from '@instinct-prj/interface';
import {userService} from '../../services/user';
import {createFetchHook} from '../fetch-hook.base';

export const useFetchUserOfTheWeek = () =>
  createFetchHook<User[]>(userService.getUserOfTheWeek);
