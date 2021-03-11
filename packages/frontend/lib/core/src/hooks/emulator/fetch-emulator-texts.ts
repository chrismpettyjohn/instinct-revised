import {createFetchHook} from '../fetch-hook.base';
import {EmulatorTexts} from '@instinct-prj/interface';
import {emulatorService} from '../../services/emulator';

export const useFetchEmulatorTexts = (): EmulatorTexts | undefined =>
  createFetchHook<EmulatorTexts>(emulatorService.getTexts);
