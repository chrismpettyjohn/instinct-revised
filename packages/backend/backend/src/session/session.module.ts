import {UserModule} from '../user';
import {JwtModule} from '@nestjs/jwt';
import {Module} from '@nestjs/common';
import {DatabaseModule} from '../database';
import {BetaCodeModule} from '../beta-code';
import {PassportModule} from '@nestjs/passport';
import {SessionService} from './session.service';
import {SessionController} from './session.controller';
import {AccountBannedGuard} from './account-ban.guard';
import {BearerTokenService} from './bearer-token.service';
import {BearerTokenStrategy} from './bearer-token.strategy';
import {CommonModule, jwtExpires, jwtSecret} from '../common';

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
