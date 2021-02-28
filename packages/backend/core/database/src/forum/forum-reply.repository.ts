import {Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from '../base.repository';
import {ForumReplyEntity} from './forum-reply.entity';

@Injectable()
export class ForumReplyRepository extends BaseRepository<ForumReplyEntity> {
  constructor(
    @InjectRepository(ForumReplyEntity)
    forumReplyRepo: Repository<ForumReplyEntity>
  ) {
    super(forumReplyRepo, ['user', 'reactions', 'reactions.user']);
  }
}
