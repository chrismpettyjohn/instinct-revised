import Moment from 'moment';
import {userWire} from '../user';
import {GroupEntity} from './group.entity';
import {Group} from '@instinct-prj/interface';

export function groupWire(groupEntity: GroupEntity): Group {
  return {
    id: groupEntity.id!,
    name: groupEntity.name,
    desc: groupEntity.description,
    user: groupEntity.user ? userWire(groupEntity.user!) : undefined,
    badge: groupEntity.badge,
    roomID: groupEntity.roomID,
    dateCreated: Moment.unix(groupEntity.dateCreated).toISOString(),
  };
}
