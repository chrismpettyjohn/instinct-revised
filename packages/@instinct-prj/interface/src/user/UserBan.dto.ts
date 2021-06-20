import {UserBan} from './UserBan';

export interface UserBanDTO {
  userID: number;
  reason: string;
  banStart: number;
  banEnd: number;
}

export const exampleBanDTO: UserBanDTO = {
  userID: 1,
  reason: 'You are a bad user',
  banStart: +new Date() / 1000,
  banEnd: +new Date() / 1000,
};

export function banWireToBanDTO(banWire: UserBan): UserBanDTO {
  return {
    userID: banWire.user.id,
    reason: banWire.banReason,
    banStart: banWire.banStart,
    banEnd: banWire.banEnd,
  };
}
