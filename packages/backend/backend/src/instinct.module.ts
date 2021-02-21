import {Module} from '@nestjs/common';
import {UserModule} from './user/user.module';
import {RoomModule} from './room/room.module';
import {RankModule} from './rank/rank.module';
import {PhotoModule} from './photo/photo.module';
import {GroupModule} from './group/group.module';
import {HealthModule} from './health/health.module';
import {CommonModule} from './common/common.module';
import {ConfigModule} from './config/config.module';
import {ArticleModule} from './article/article.module';
import {SessionModule} from './session/session.module';
import {FeatureModule} from './feature/feature.module';
import {EmulatorModule} from './emulator/emulator.module';
import {DatabaseModule} from './database/database.module';
import {BetaCodeModule} from './beta-code/beta-code.module';

@Module({
  imports: [
    UserModule,
    RankModule,
    RoomModule,
    PhotoModule,
    GroupModule,
    ConfigModule,
    CommonModule,
    ArticleModule,
    HealthModule,
    SessionModule,
    FeatureModule,
    EmulatorModule,
    DatabaseModule,
    BetaCodeModule,
  ],
  exports: [
    UserModule,
    RankModule,
    RoomModule,
    PhotoModule,
    GroupModule,
    ConfigModule,
    CommonModule,
    ArticleModule,
    FeatureModule,
    HealthModule,
    SessionModule,
    EmulatorModule,
    DatabaseModule,
    BetaCodeModule,
  ],
})
export class InstinctModule {}
