import {Module} from '@nestjs/common';
import {SessionModule} from '@instinct-prj/session-api';
import {BetaCodeController} from './beta-code.controller';
import {DatabaseModule} from '@instinct-prj/database-api';

@Module({
  imports: [DatabaseModule, SessionModule],
  controllers: [BetaCodeController],
})
export class BetaCodeModule {}
