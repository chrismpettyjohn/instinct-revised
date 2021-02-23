import {UserPipe} from './user.pipe';
import {Module} from '@nestjs/common';
import {UserBanPipe} from './ban.pipe';
import {userConstraints} from './constraint';
import {UserController} from './user.controller';
import {UserBanController} from './ban.controller';
import {UserLeaderBoardService} from './leaderboard.service';
import {UserLeaderBoardController} from './leaderboard.controller';
import {
  DatabaseModule,
  BetaCodeModule,
  CommonModule,
  GoogleModule,
} from '@instinct-prj/core-api';

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
