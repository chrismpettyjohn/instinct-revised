import {ConfigDTO} from '@instinct-prj/interface';
import {createFetchHook} from '../fetch-hook.base';
import {configService} from '../../services/config';

export const useFetchFullConfig = () =>
  createFetchHook<ConfigDTO>(configService.getFullConfig);
