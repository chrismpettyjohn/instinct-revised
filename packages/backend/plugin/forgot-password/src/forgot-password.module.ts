import {Module} from '@nestjs/common';
import {UserModule} from '@instinct-prj/user-api';
import {EmailModule} from '@instinct-prj/email-api';
import {CommonModule} from '@instinct-prj/common-api';
import {DatabaseModule} from '@instinct-prj/database-api';
import {ForgotPasswordService} from './forgot-password.service';
import {ForgotPasswordController} from './forgot-password.controller';

@Module({
  imports: [DatabaseModule, UserModule, EmailModule, CommonModule],
  controllers: [ForgotPasswordController],
  providers: [ForgotPasswordService],
})
export class ForgotPasswordModule {}
