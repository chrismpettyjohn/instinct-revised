import {Module} from '@nestjs/common';
import {SessionModule} from '@instinct-api/session';
import {BetaCodeController} from './beta-code.controller';
import {DatabaseModule} from '@instinct-api/database';

@Module({
  imports: [DatabaseModule, SessionModule],
  controllers: [BetaCodeController],
})
export class BetaCodeModule {}
