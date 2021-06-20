import {Module} from '@nestjs/common';
import {ConfigController} from './config.controller';
import {DatabaseModule} from '@instinct-api/database';
import {SessionModule} from '@instinct-api/session';

@Module({
  imports: [DatabaseModule, SessionModule],
  controllers: [ConfigController],
})
export class ConfigModule {}
