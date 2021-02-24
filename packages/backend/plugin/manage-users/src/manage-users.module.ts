import {Module} from '@nestjs/common';
import {UserModule} from '@instinct-api/users';
import {CommonModule} from '@instinct-api/common';
import {SessionModule} from '@instinct-api/session';
import {DatabaseModule} from '@instinct-api/database';
import {ValidatorModule} from '@instinct-api/validator';
import {ManageUsersController} from './manage-users.controller';

@Module({
  imports: [
    DatabaseModule,
    UserModule,
    CommonModule,
    ValidatorModule,
    SessionModule,
  ],
  controllers: [ManageUsersController],
})
export class ManageUsersModule {}
