import {Module} from '@nestjs/common';
import {DatabaseModule} from '@instinct-prj/database-api';
import {BetaCodeConstraint} from './beta-code.constraint';
import {UserExistsConstraint} from './user-exists.constraint';
import {UniqueEmailConstraint} from './unique-email.constraint';
import {ExistingRankConstraint} from './existing-rank.constraint';
import {UniqueUsernameConstraint} from './unique-username.constraint';

@Module({
  imports: [DatabaseModule],
  providers: [
    BetaCodeConstraint,
    UserExistsConstraint,
    UniqueEmailConstraint,
    ExistingRankConstraint,
    UniqueUsernameConstraint,
  ],
  exports: [
    UserExistsConstraint,
    UniqueEmailConstraint,
    ExistingRankConstraint,
    UniqueUsernameConstraint,
  ],
})
export class ValidatorModule {}
