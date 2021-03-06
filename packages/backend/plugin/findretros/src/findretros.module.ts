import {Module} from '@nestjs/common';
import {SessionModule} from '@instinct-api/session';
import {DatabaseModule} from '@instinct-api/database';
import {FindRetrosService} from './findretros.service';

@Module({
  imports: [DatabaseModule, SessionModule],
  providers: [FindRetrosService],
  exports: [FindRetrosService],
})
export class FindRetrosModule {}
