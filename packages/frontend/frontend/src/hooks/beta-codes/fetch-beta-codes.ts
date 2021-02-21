import {BetaCode} from '@instinct-prj/interface';
import {createFetchHook} from '../fetch-hook.base';
import {betaCodeService} from '../../services/beta-code';

export const useFetchBetaCodes = (refresh = 0) =>
  createFetchHook<BetaCode[]>(betaCodeService.getAll, refresh);
