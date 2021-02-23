import {Module} from '@nestjs/common';
import {UserModule} from '@instinct-prj/user-api';
import {RankModule} from '@instinct-prj/rank-api';
import {SessionModule} from '@instinct-prj/session-api';
import {DatabaseModule} from '@instinct-prj/database-api';
import {ManageUsersController} from './manage-users.controller';

@Module({
  imports: [DatabaseModule, UserModule, RankModule, SessionModule],
  controllers: [ManageUsersController],
})
export class ManageUsersModule {}
