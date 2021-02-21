import {UserBanEntity} from '../database/user';
import {UserBanDTO} from '@instinct-prj/interface';
import {IsNotEmpty, IsNumber, IsString} from 'class-validator';

export class UserBanDTOClass implements UserBanDTO {
  @IsNumber()
  userID!: number;

  @IsString()
  @IsNotEmpty()
  reason!: string;

  @IsNumber()
  banStart!: number;

  @IsNumber()
  banEnd!: number;
}

export function userBanDataTransferObjectToEntity(
  userBanDTO: UserBanDTO
): Partial<UserBanEntity> {
  return {
    userID: userBanDTO.userID,
    banReason: userBanDTO.reason,
    banStartedTimestamp: userBanDTO.banStart,
    banExpirationTimestamp: userBanDTO.banEnd,
  };
}
