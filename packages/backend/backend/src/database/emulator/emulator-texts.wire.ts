import {EmulatorTexts} from '@instinct-prj/interface';
import {EmulatorTextsEntity} from './emulator-texts.entity';

export function emulatorTextsWire(
  options: EmulatorTextsEntity[]
): EmulatorTexts {
  return options.map(_ => ({
    id: _.key,
    label: _.key,
    value: _.value,
  }));
}
