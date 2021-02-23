import {Module} from '@nestjs/common';
import {ConfigController} from './config.controller';
import {DatabaseModule} from '@instinct-prj/database-api';

@Module({
  imports: [DatabaseModule],
  controllers: [ConfigController],
})
export class ConfigModule {}
