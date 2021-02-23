import {Module} from '@nestjs/common';
import {UserModule} from '@instinct-prj/user-api';
import {RankModule} from '@instinct-prj/rank-api';
import {HealthModule} from '../../core/health/src';
import {EmailModule} from '@instinct-prj/email-api';
import {GroupModule} from '@instinct-prj/group-api';
import {PhotoModule} from '@instinct-prj/photo-api';
import {ConfigModule} from '@instinct-prj/config-api';
import {CommonModule} from '@instinct-prj/common-api';
import {GoogleModule} from '@instinct-prj/google-api';
import {SessionModule} from '@instinct-prj/session-api';
import {ArticleModule} from '@instinct-prj/article-api';
import {EmulatorModule} from '@instinct-prj/emulator-api';
import {DatabaseModule} from '@instinct-prj/database-api';
import {BetaCodeModule} from '@instinct-prj/beta-code-api';

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
