import {Module} from '@nestjs/common';
import {BetaModeGuard} from './beta-code.guard';
import {BetaCodeConstraint} from './beta-code.constraint';
import {BetaCodeController} from './beta-code.controller';
import {DatabaseModule} from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [BetaCodeController],
  providers: [BetaCodeConstraint, BetaModeGuard],
  exports: [BetaCodeConstraint, BetaModeGuard],
})
export class BetaCodeModule {}
