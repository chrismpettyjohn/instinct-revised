import {Module} from '@nestjs/common';
import {BetaModeGuard} from './beta-code.guard';
import {SessionModule} from '@instinct-prj/session-api';
import {BetaCodeConstraint} from './beta-code.constraint';
import {BetaCodeController} from './beta-code.controller';
import {DatabaseModule} from '@instinct-prj/database-api';

@Module({
  imports: [DatabaseModule, SessionModule],
  controllers: [BetaCodeController],
  providers: [BetaCodeConstraint, BetaModeGuard],
  exports: [BetaCodeConstraint, BetaModeGuard],
})
export class BetaCodeModule {}
