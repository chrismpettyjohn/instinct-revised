import {Module} from '@nestjs/common';
import {ManageUsersModule} from './manage-users';
import {ForgotPasswordModule} from './forgot-password';
import {UserGuestbookModule} from './user-guestbook/user-guestbook.module';

@Module({
  imports: [ForgotPasswordModule, ManageUsersModule, UserGuestbookModule],
  exports: [ForgotPasswordModule, ManageUsersModule, UserGuestbookModule],
})
export class FeatureModule {}
