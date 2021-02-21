import {userWire} from '../user/user.wire';
import {UserBan} from '@instinct-prj/interface';
import {UserBanEntity} from './bans.entity';

export function userBanWire(banEntity: UserBanEntity): UserBan {
  return {
    id: banEntity.id!,
    user: userWire(banEntity.user!),
    bannedBy: userWire(banEntity.staffMember!),
    banStart: banEntity.banStartedTimestamp,
    banEnd: banEntity.banExpirationTimestamp,
    banReason: banEntity.banReason,
  };
}
