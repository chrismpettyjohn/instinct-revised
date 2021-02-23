import {JwtModule} from '@nestjs/jwt';
import {Module} from '@nestjs/common';
import {PassportModule} from '@nestjs/passport';
import {SessionService} from './session.service';
import {UserModule} from '@instinct-prj/user-api';
import {SessionController} from './session.controller';
import {AccountBannedGuard} from './account-ban.guard';
import {DatabaseModule} from '@instinct-prj/database-api';
import {BearerTokenService} from './bearer-token.service';
import {BetaCodeModule} from '@instinct-prj/beta-code-api';
import {BearerTokenStrategy} from './bearer-token.strategy';
import {CommonModule, jwtExpires, jwtSecret} from '@instinct-prj/core-api';

@Module({
  imports: [
    UserModule,
    CommonModule,
    DatabaseModule,
    BetaCodeModule,
    PassportModule,
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
  ],
  exports: [
    SessionService,
    BearerTokenService,
    BearerTokenStrategy,
    AccountBannedGuard,
  ],
})
export class SessionModule {
  constructor() {
    PassportModule.register({
      session: true,
    });
  }
}
