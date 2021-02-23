import {Module} from '@nestjs/common';
import {UserModule} from '@instinct-api/users';
import {SessionModule} from '@instinct-api/session';
import {DatabaseModule} from '@instinct-api/database';
import {UserGuestbookController} from './user-guestbook.controller';

@Module({
  imports: [SessionModule, UserModule, DatabaseModule],
  controllers: [UserGuestbookController],
})
export class UserGuestbookModule {}
