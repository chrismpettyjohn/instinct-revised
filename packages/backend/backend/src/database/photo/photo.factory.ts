import Moment from 'moment';
import {getRepository} from 'typeorm';
import {UserEntity} from '../user/user/user.entity';
import {userFactory} from '../user/user/user.factory';
import {PhotoEntity} from './photo.entity';

export async function photoFactory(
  changes?: Partial<PhotoEntity>
): Promise<PhotoEntity> {
  const user: UserEntity = await userFactory();
  return getRepository(PhotoEntity).save({
    id: undefined,
    user,
    roomID: 0,
    imagePath: '/blah.png',
    createdAt: Moment().unix(),
    ...changes,
  });
}
