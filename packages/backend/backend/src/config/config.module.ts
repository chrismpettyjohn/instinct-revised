import {Module} from '@nestjs/common';
import {DatabaseModule} from '../database';
import {ConfigController} from './config.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [ConfigController],
})
export class ConfigModule {}
