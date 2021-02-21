import {Module} from '@nestjs/common';
import {DatabaseModule} from '../../database/database.module';
import {UserGuestbookController} from './user-guestbook.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [UserGuestbookController],
})
export class UserGuestbookModule {}
