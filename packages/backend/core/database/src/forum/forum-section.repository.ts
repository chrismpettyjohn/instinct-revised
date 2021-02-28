import {Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from '../base.repository';
import {ForumSectionEntity} from './forum-section.entity';

@Injectable()
export class ForumSectionRepository extends BaseRepository<ForumSectionEntity> {
  constructor(
    @InjectRepository(ForumSectionEntity)
    forumSectionRepo: Repository<ForumSectionEntity>
  ) {
    super(forumSectionRepo, ['parentSection', 'childSections']);
  }
}
