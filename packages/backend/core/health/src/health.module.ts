import {Module} from '@nestjs/common';
import {HealthController} from './health.controller';
import {DatabaseModule} from '@instinct-prj/database-api';

@Module({
  imports: [DatabaseModule],
  controllers: [HealthController],
})
export class HealthModule {}
