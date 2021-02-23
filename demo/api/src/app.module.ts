import {Module} from '@nestjs/common';
import {InstinctAPIModule} from '@instinct-prj/api';
import {ManageUsersModule} from '@instinct-plugin/manage-users-api';
import {ForgotPasswordModule} from '@instinct-plugin/forgot-password-api';
import {UserGuestbookModule} from '../../../packages/backend/plugin/user-guestbook/src/user-guestbook.module';

@Module({
  imports: [
    InstinctAPIModule,
    ManageUsersModule,
    UserGuestbookModule,
    ForgotPasswordModule,
  ],
})
export class InstinctRoleplayAppModule {}
