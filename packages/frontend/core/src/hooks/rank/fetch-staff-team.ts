import {Rank} from '@instinct-prj/interface';
import {rankService} from '../../services/rank';
import {createFetchHook} from '../fetch-hook.base';

export const useFetchStaffTeam = () =>
  createFetchHook<Rank[]>(rankService.getStaff);
