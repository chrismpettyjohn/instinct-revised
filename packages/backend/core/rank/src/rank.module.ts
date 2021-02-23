import {RankPipe} from './rank.pipe';
import {Module} from '@nestjs/common';
import {RankConstraint} from './rank.constraint';
import {RankController} from './rank.controller';
import {DatabaseModule} from '@instinct-prj/database-api';

@Module({
  imports: [DatabaseModule],
  controllers: [RankController],
  providers: [RankPipe, RankConstraint],
  exports: [RankPipe, RankConstraint],
})
export class RankModule {}
