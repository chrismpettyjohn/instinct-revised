import {Module} from '@nestjs/common';
import {SessionModule} from '@instinct-prj/session-api';
import {DatabaseModule} from '@instinct-prj/database-api';
import {EmulatorTextsController} from './emulator-texts.controller';
import {EmulatorSettingsController} from './emulator-settings.controller';

@Module({
  imports: [DatabaseModule, SessionModule],
  controllers: [EmulatorSettingsController, EmulatorTextsController],
})
export class EmulatorModule {}
