import {Module} from '@nestjs/common';
import {UserModule} from '../../user/user.module';
import {RankModule} from '../../rank/rank.module';
import {SessionModule} from '../../session/session.module';
import {DatabaseModule} from '../../database/database.module';
import {ManageUsersController} from './manage-users.controller';

@Module({
  imports: [DatabaseModule, UserModule, RankModule, SessionModule],
  controllers: [ManageUsersController],
})
export class ManageUsersModule {}
