import {EmulatorSettings} from '@instinct-prj/interface';
import {EmulatorSettingsEntity} from './emulator-settings.entity';

export function emulatorSettingsWire(
  options: EmulatorSettingsEntity[]
): EmulatorSettings {
  return options.map(_ => ({
    id: _.key,
    label: _.key,
    value: _.value,
  }));
}
