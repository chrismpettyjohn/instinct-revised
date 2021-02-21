import {Body, Controller, Get, Patch} from '@nestjs/common';
import {EmulatorSettingsDTO} from '@instinct-prj/interface';
import {HasScope} from '../session/permission-scope.decorator';
import {emulatorSettingsWire} from '../database/emulator/emulator-settings.wire';
import {EmulatorSettingsRepository} from '../database/emulator/emulator-settings.repository';

@Controller('emulator/settings')
export class EmulatorSettingsController {
  constructor(
    private readonly emulatorSettingsRepo: EmulatorSettingsRepository
  ) {}

  @Get()
  @HasScope('websiteManageEmulator')
  async getSettings() {
    const settings = await this.emulatorSettingsRepo.find();
    return emulatorSettingsWire(settings);
  }

  @Patch()
  @HasScope('websiteManageEmulator')
  async updateSettings(@Body() emulatorSettingsDTO: EmulatorSettingsDTO) {
    await Promise.all(
      emulatorSettingsDTO.map(_ => {
        return this.emulatorSettingsRepo.update({key: _.id}, {value: _.value});
      })
    );

    const updatedSettings = await this.emulatorSettingsRepo.find();
    return emulatorSettingsWire(updatedSettings);
  }
}
