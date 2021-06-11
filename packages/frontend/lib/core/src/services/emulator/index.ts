import {EmulatorService} from './Emulator.types';
import {EmulatorServiceImplementation} from './Emulator';

export const emulatorService: EmulatorService =
  new EmulatorServiceImplementation();
