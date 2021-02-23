import {UserPipe} from './user.pipe';
import {Module} from '@nestjs/common';
import {UserBanPipe} from './ban.pipe';
import {UserController} from './user.controller';
import {UserBanController} from './ban.controller';
import {CommonModule} from '@instinct-prj/common-api';
import {GoogleModule} from '@instinct-prj/google-api';
import {DatabaseModule} from '@instinct-prj/database-api';
import {UserLeaderBoardService} from './leaderboard.service';
import {ValidatorModule} from '@instinct-prj/validator-api';
import {UserLeaderBoardController} from './leaderboard.controller';

@Module({
  imports: [CommonModule, DatabaseModule, GoogleModule, ValidatorModule],
  controllers: [UserController, UserLeaderBoardController, UserBanController],
  providers: [UserPipe, UserLeaderBoardService, UserBanPipe],
  exports: [UserPipe, UserLeaderBoardService, UserBanPipe],
})
export class UserModule {}
