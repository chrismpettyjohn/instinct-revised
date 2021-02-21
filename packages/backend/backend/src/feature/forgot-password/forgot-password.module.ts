import {Module} from '@nestjs/common';
import {UserModule} from '../../user';
import {CommonModule} from '../../common';
import {DatabaseModule} from '../../database';
import {EmailModule} from '../../email/email.module';
import {ForgotPasswordService} from './forgot-password.service';
import {ForgotPasswordController} from './forgot-password.controller';

@Module({
  imports: [DatabaseModule, UserModule, EmailModule, CommonModule],
  controllers: [ForgotPasswordController],
  providers: [ForgotPasswordService],
})
export class ForgotPasswordModule {}
