import {HasScope} from '@instinct-api/session';
import {EmulatorTextsDTO} from '@instinct-prj/interface';
import {Body, Controller, Get, Patch} from '@nestjs/common';
import {
  emulatorTextsWire,
  EmulatorTextsRepository,
} from '@instinct-api/database';

@Controller('emulator/texts')
export class EmulatorTextsController {
  constructor(private readonly emulatorTextsRepo: EmulatorTextsRepository) {}

  @Get()
  @HasScope('websiteManageEmulator')
  async getTexts() {
    const texts = await this.emulatorTextsRepo.find();
    return emulatorTextsWire(texts);
  }

  @Patch()
  @HasScope('websiteManageEmulator')
  async updateSettings(@Body() emulatorTextsDTO: EmulatorTextsDTO) {
    await Promise.all(
      emulatorTextsDTO.map(_ => {
        return this.emulatorTextsRepo.update({key: _.id}, {value: _.value});
      })
    );

    const updatedTexts = await this.emulatorTextsRepo.find();
    return emulatorTextsWire(updatedTexts);
  }
}
