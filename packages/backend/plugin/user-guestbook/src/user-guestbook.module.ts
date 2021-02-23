import {Module} from '@nestjs/common';
import {UserModule} from '@instinct-prj/user-api';
import {SessionModule} from '@instinct-prj/session-api';
import {DatabaseModule} from '@instinct-prj/database-api';
import {UserGuestbookController} from './user-guestbook.controller';

@Module({
  imports: [SessionModule, UserModule, DatabaseModule],
  controllers: [UserGuestbookController],
})
export class UserGuestbookModule {}
