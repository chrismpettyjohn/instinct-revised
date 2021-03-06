import {Module} from '@nestjs/common';
import {SessionModule} from '@instinct-api/session';
import {DatabaseModule} from '@instinct-api/database';
import {FindRetrosService} from './findretros.service';
import {FindRetrosController} from './findretros.controller';

@Module({
  imports: [DatabaseModule, SessionModule],
  controllers: [FindRetrosController],
  providers: [FindRetrosService],
  exports: [FindRetrosService],
})
export class FindRetrosModule {}
