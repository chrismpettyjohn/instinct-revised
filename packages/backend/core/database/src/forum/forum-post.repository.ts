import {Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from '../base.repository';
import {ForumPostEntity} from './forum-post.entity';

@Injectable()
export class ForumPostRepository extends BaseRepository<ForumPostEntity> {
  constructor(
    @InjectRepository(ForumPostEntity)
    forumPostRepo: Repository<ForumPostEntity>
  ) {
    super(forumPostRepo, ['user', 'section', 'reactions', 'reactions.user']);
  }
}
