import {createFetchHook} from '../fetch-hook.base';
import {emulatorService} from '../../services/emulator';
import {EmulatorSettings} from '@instinct-prj/interface';

export const useFetchEmulatorSettings = (): EmulatorSettings | undefined =>
  createFetchHook<EmulatorSettings>(emulatorService.getSettings);
