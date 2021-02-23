import {Module} from '@nestjs/common';
import {ConfigController} from './config.controller';
import {DatabaseModule} from '@instinct-prj/database-api';
import { SessionModule } from '@instinct-prj/session-api';

@Module({
  imports: [DatabaseModule, SessionModule],
  controllers: [ConfigController],
})
export class ConfigModule {}
