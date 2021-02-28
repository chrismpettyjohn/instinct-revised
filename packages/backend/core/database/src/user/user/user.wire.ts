import {omit} from 'lodash';
import Moment from 'moment';
import {rankWire} from '../../rank';
import {UserEntity} from './user.entity';
import {InternalUser, User} from '@instinct-prj/interface';

export function userWire(userEntity: UserEntity): User {
  return {
    id: userEntity.id!,
    username: userEntity.username,
    motto: userEntity.motto!,
    credits: userEntity.credits,
    pixels: userEntity.pixels,
    points: userEntity.points,
    online: userEntity.online === '1',
    figure: userEntity.figure,
    joinDate: Moment.unix(userEntity.accountCreated).toISOString(),
    lastLoginDate: Moment.unix(userEntity.lastLogin).toISOString(),
    rank:
      userEntity.rank !== undefined ? rankWire(userEntity.rank!) : undefined,
    favoriteYoutubeVideo: userEntity.favoriteYoutubeVideo,
    userOfTheWeek: userEntity.userOfTheWeek === 1,
    clientType: userEntity.clientType,
  };
}

export function internalUserWire(userEntity: UserEntity): InternalUser {
  return {
    ...omit(userWire(userEntity), 'rank'),
    email: userEntity.email,
    rankID: userEntity.rankID,
  };
}
