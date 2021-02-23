import {UserPipe} from './user.pipe';
import {Module} from '@nestjs/common';
import {UserBanPipe} from './ban.pipe';
import {UserController} from './user.controller';
import {UserBanController} from './ban.controller';
import {CommonModule} from '@instinct-api/common';
import {GoogleModule} from '@instinct-api/google';
import {DatabaseModule} from '@instinct-api/database';
import {UserLeaderBoardService} from './leaderboard.service';
import {ValidatorModule} from '@instinct-api/validator';
import {UserLeaderBoardController} from './leaderboard.controller';

@Module({
  imports: [CommonModule, DatabaseModule, GoogleModule, ValidatorModule],
  controllers: [UserController, UserLeaderBoardController, UserBanController],
  providers: [UserPipe, UserLeaderBoardService, UserBanPipe],
  exports: [UserPipe, UserLeaderBoardService, UserBanPipe],
})
export class UserModule {}
