import {Module} from '@nestjs/common';
import {UserModule} from '@instinct-prj/user-api';
import {DatabaseModule} from '@instinct-prj/database-api';
import {UserGuestbookController} from './user-guestbook.controller';

@Module({
  imports: [UserModule, DatabaseModule],
  controllers: [UserGuestbookController],
})
export class UserGuestbookModule {}
