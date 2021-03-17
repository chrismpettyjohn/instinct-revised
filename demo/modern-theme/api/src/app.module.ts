import {Module} from '@nestjs/common';
import {UserModule} from '@instinct-api/users';
import {RankModule} from '@instinct-api/ranks';
import {ForumModule} from '@instinct-api/forum';
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
import {FindRetrosModule} from '@instinct-plugin/findretros-api';
import {ManageUsersModule} from '@instinct-plugin/manage-users-api';
import {UserGuestbookModule} from '@instinct-plugin/user-guestbook-api';
import {ForgotPasswordModule} from '@instinct-plugin/forgot-password-api';

@Module({
  imports: [
    ArticleModule,
    BetaCodeModule,
    CommonModule,
    ConfigModule,
    ForumModule,
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
    FindRetrosModule,
    ManageUsersModule,
    UserGuestbookModule,
    ForgotPasswordModule,
  ],
})
export class InstinctRoleplayAppModule {}
