import {Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from '../base.repository';
import {ForumReactionEntity} from './forum-reaction.entity';

@Injectable()
export class ForumReactionRepository extends BaseRepository<ForumReactionEntity> {
  constructor(
    @InjectRepository(ForumReactionEntity)
    forumReactionRepo: Repository<ForumReactionEntity>
  ) {
    super(forumReactionRepo, ['user']);
  }
}
