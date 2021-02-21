import {UserBan} from '@instinct-prj/interface';
import {banService} from '../../services/ban';
import {createFetchHook} from '../fetch-hook.base';

export const useFetchAllBans = () =>
  createFetchHook<UserBan[]>(banService.getAll);
