import {Rank} from '@instinct-prj/interface';
import {rankService} from '../../services/rank';
import {createFetchHook} from '../fetch-hook.base';

export const useFetchStaffTeam = (): Rank[] | undefined =>
  createFetchHook<Rank[]>(rankService.getStaff);
