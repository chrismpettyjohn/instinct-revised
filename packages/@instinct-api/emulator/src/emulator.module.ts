import {Module} from '@nestjs/common';
import {SessionModule} from '@instinct-api/session';
import {DatabaseModule} from '@instinct-api/database';
import {EmulatorTextsController} from './emulator-texts.controller';
import {EmulatorSettingsController} from './emulator-settings.controller';

@Module({
  imports: [DatabaseModule, SessionModule],
  controllers: [EmulatorSettingsController, EmulatorTextsController],
})
export class EmulatorModule {}
