import {Module} from '@nestjs/common';
import {UserModule} from '@instinct-api/users';
import {RankModule} from '@instinct-api/ranks';
import {EmailModule} from '@instinct-api/emails';
import {GroupModule} from '@instinct-api/groups';
import {PhotoModule} from '@instinct-api/photos';
import {ConfigModule} from '@instinct-api/config';
import {CommonModule} from '@instinct-api/common';
import {GoogleModule} from '@instinct-api/google';
import {HealthModule} from '@instinct-api/health';
import {SessionModule} from '@instinct-api/session';
import {ArticleModule} from '@instinct-api/articles';
import {EmulatorModule} from '@instinct-api/emulator';
import {DatabaseModule} from '@instinct-api/database';
import {BetaCodeModule} from '@instinct-api/beta-codes';

@Module({
  imports: [
    ArticleModule,
    BetaCodeModule,
    CommonModule,
    ConfigModule,
    DatabaseModule,
    EmailModule,
    EmulatorModule,
    GoogleModule,
    GroupModule,
    HealthModule,
    PhotoModule,
    RankModule,
    SessionModule,
    UserModule,
  ],
  exports: [
    ArticleModule,
    BetaCodeModule,
    CommonModule,
    ConfigModule,
    DatabaseModule,
    EmailModule,
    EmulatorModule,
    GoogleModule,
    GroupModule,
    HealthModule,
    PhotoModule,
    RankModule,
    SessionModule,
    UserModule,
  ],
})
export class InstinctAPIModule {}
