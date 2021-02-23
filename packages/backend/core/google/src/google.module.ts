import {Module} from '@nestjs/common';
import {DatabaseModule} from '@instinct-prj/database-api';
import {GoogleRecaptchaService} from './recaptcha.service';
import {RecaptchaConstraint} from './recaptcha.constraint';

@Module({
  imports: [DatabaseModule],
  providers: [GoogleRecaptchaService, RecaptchaConstraint],
  exports: [GoogleRecaptchaService, RecaptchaConstraint],
})
export class GoogleModule {}
