import {Module} from '@nestjs/common';
import {HealthController} from './health.controller';
import {DatabaseModule} from '@instinct-api/database';

@Module({
  imports: [DatabaseModule],
  controllers: [HealthController],
})
export class HealthModule {}
