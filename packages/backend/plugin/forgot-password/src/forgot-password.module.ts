import {Module} from '@nestjs/common';
import {UserModule} from '@instinct-api/users';
import {EmailModule} from '@instinct-api/emails';
import {CommonModule} from '@instinct-api/common';
import {DatabaseModule} from '@instinct-api/database';
import {ForgotPasswordService} from './forgot-password.service';
import {ForgotPasswordController} from './forgot-password.controller';

@Module({
  imports: [DatabaseModule, UserModule, EmailModule, CommonModule],
  controllers: [ForgotPasswordController],
  providers: [ForgotPasswordService],
})
export class ForgotPasswordModule {}
