import {UserPipe} from './user.pipe';
import {Module} from '@nestjs/common';
import {CommonModule} from '../common';
import {UserBanPipe} from './ban.pipe';
import {BetaCodeModule} from '../beta-code';
import {DatabaseModule} from '../database';
import {userConstraints} from './constraint';
import {UserController} from './user.controller';
import {UserBanController} from './ban.controller';
import {GoogleModule} from '../google/google.module';
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
