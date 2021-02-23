import {RankPipe} from './rank.pipe';
import {Module} from '@nestjs/common';
import {RankController} from './rank.controller';
import {DatabaseModule} from '@instinct-prj/database-api';
import {ValidatorModule} from '@instinct-prj/validator-api';

@Module({
  imports: [DatabaseModule, ValidatorModule],
  controllers: [RankController],
  providers: [RankPipe],
  exports: [RankPipe],
})
export class RankModule {}
