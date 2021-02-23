import {Module} from '@nestjs/common';
import {InstinctAPIModule} from '@instinct-prj/api';
import {ManageUsersModule} from '@instinct-prj/manage-users-api-plugin';
import {ForgotPasswordModule} from '@instinct-prj/forgot-password-api-plugin';
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
