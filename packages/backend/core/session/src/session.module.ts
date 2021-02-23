import {JwtModule} from '@nestjs/jwt';
import {Module} from '@nestjs/common';
import {BetaModeGuard} from './beta-code.guard';
import {PassportModule} from '@nestjs/passport';
import {SessionService} from './session.service';
import {CommonModule} from '@instinct-prj/common-api';
import {SessionController} from './session.controller';
import {AccountBannedGuard} from './account-ban.guard';
import {DatabaseModule} from '@instinct-prj/database-api';
import {BearerTokenService} from './bearer-token.service';
import {BearerTokenStrategy} from './bearer-token.strategy';
import {ValidatorModule} from '@instinct-prj/validator-api';
import {jwtExpires, jwtSecret} from '@instinct-prj/common-api';

@Module({
  imports: [
    CommonModule,
    DatabaseModule,
    PassportModule,
    ValidatorModule,
    JwtModule.register({
      secret: jwtSecret,
      signOptions: {
        expiresIn: jwtExpires,
      },
    }),
  ],
  controllers: [SessionController],
  providers: [
    SessionService,
    BearerTokenService,
    BearerTokenStrategy,
    AccountBannedGuard,
    BetaModeGuard,
  ],
  exports: [
    SessionService,
    BearerTokenService,
    BearerTokenStrategy,
    AccountBannedGuard,
    BetaModeGuard,
  ],
})
export class SessionModule {
  constructor() {
    PassportModule.register({
      session: true,
    });
  }
}
