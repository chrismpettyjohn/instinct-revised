import Random from 'randomstring';
import {Repository} from 'typeorm';
import {UserEntity} from './user.entity';
import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from '../../base.repository';
import {HashService} from '@instinct-prj/common-api';

@Injectable()
export class UserRepository extends BaseRepository<UserEntity> {
  readonly eagerRelations: Array<keyof UserEntity> = [
    'rank',
    'joinedGroups',
    'badges',
    'rooms',
    'friends',
    'betaCode',
    'bans',
  ];

  constructor(
    @InjectRepository(UserEntity) userRepository: Repository<UserEntity>,
    private readonly hashService: HashService
  ) {
    super(userRepository, [
      'rank',
      'joinedGroups',
      'badges',
      'rooms',
      'friends',
      'betaCode',
      'bans',
    ]);
  }

  async create(user: UserEntity): Promise<UserEntity> {
    return super.create({
      ...user,
      password: this.hashService.generate(user.password),
    });
  }

  async createSSO(userID: number): Promise<string> {
    const authTicket: string = 'instinct_' + Random.generate(50) + '_' + userID;
    await this.update({id: userID}, {authTicket});
    return authTicket;
  }
}
