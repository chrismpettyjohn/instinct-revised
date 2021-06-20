import {Group} from '@instinct-prj/interface';
import {createFetchHook} from '../fetch-hook.base';
import {groupService} from '../../services/group';

export const useFetchPopularGroups = () =>
  createFetchHook<Group[]>(groupService.getMostPopular);
