import {backendAPI} from '../../api';
import {AxiosResponse} from 'axios';
import {EmulatorService} from './Emulator.types';
import {
  EmulatorSettings,
  EmulatorSettingsDTO,
  EmulatorTexts,
  EmulatorTextsDTO,
} from '@instinct-prj/interface';

export class EmulatorServiceImplementation implements EmulatorService {
  async getSettings() {
    const settings: AxiosResponse<EmulatorSettings> = await backendAPI.get(
      'emulator/settings'
    );
    return settings.data;
  }

  async updateSettings(changes: EmulatorSettingsDTO) {
    const updatedSettings: AxiosResponse<EmulatorSettings> = await backendAPI.patch(
      'emulator/settings',
      changes
    );
    return updatedSettings.data;
  }

  async getTexts() {
    const texts: AxiosResponse<EmulatorTexts> = await backendAPI.get(
      'emulator/texts'
    );
    return texts.data;
  }

  async updateTexts(changes: EmulatorTextsDTO) {
    const updatedTexts: AxiosResponse<EmulatorTexts> = await backendAPI.patch(
      'emulator/texts',
      changes
    );
    return updatedTexts.data;
  }
}
