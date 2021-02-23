import {UserPipe} from './user.pipe';
import {Module} from '@nestjs/common';
import {UserBanPipe} from './ban.pipe';
import {userConstraints} from './constraint';
import {UserController} from './user.controller';
import {UserBanController} from './ban.controller';
import {CommonModule} from '@instinct-prj/common-api';
import {GoogleModule} from '@instinct-prj/google-api';
import {DatabaseModule} from '@instinct-prj/database-api';
import {BetaCodeModule} from '@instinct-prj/beta-code-api';
import {UserLeaderBoardService} from './leaderboard.service';
import {UserLeaderBoardController} from './leaderboard.controller';

@Module({
  imports: [CommonModule, DatabaseModule, GoogleModule, BetaCodeModule],
  controllers: [UserController, UserLeaderBoardController, UserBanController],
  providers: [
    UserPipe,
    UserLeaderBoardService,
    UserBanPipe,
    ...userConstraints,
  ],
  exports: [UserPipe, UserLeaderBoardService, UserBanPipe, ...userConstraints],
})
export class UserModule {}
