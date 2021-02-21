import {userWire} from '../user/user.wire';
import {UserGuestbookEntity} from './guestbook.entity';
import {UserGuestbookPost} from '@instinct-prj/interface';

export function userGuestbookWire(
  entity: UserGuestbookEntity
): UserGuestbookPost {
  return {
    id: entity.id!,
    profileID: entity.profileID,
    author: userWire(entity.author!),
    content: entity.content,
    timestamp: entity.timestamp,
  };
}
