import {Module} from '@nestjs/common';
import {InstinctAPIModule} from '@instinct-prj/api';
import {ManageUsersModule} from '@instinct-prj/mnage-users-plugin-api';
import {ForgotPasswordModule} from '@instinct-prj/forgot-password-plugin-api';
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
