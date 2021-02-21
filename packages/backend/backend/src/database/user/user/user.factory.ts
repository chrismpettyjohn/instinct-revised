import {getRepository} from 'typeorm';
import {UserEntity} from './user.entity';

export function userFactory(
  changes?: Partial<UserEntity>
): Promise<UserEntity> {
  return getRepository(UserEntity).save({
    username: 'Test',
    motto: 'Testing',
    email: 'test@testing.com',
    password: 'password',
    rankID: 0,
    figure: '-',
    credits: 10,
    pixels: 10,
    online: '1',
    ...changes,
  });
}
