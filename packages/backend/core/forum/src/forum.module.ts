import {Module} from '@nestjs/common';
import {SessionModule} from '@instinct-api/session';
import {DatabaseModule} from '@instinct-api/database';
import {ForumPostPipe} from './forum-post/forum-post.pipe';
import {ForumSectionPipe} from './forum-section/forum-section.pipe';
import {ForumPostController} from './forum-post/forum-post.controller';
import {ForumSectionController} from './forum-section/forum-section.controller';

@Module({
  imports: [DatabaseModule, SessionModule],
  controllers: [ForumPostController, ForumSectionController],
  providers: [ForumPostPipe, ForumSectionPipe],
  exports: [ForumPostPipe, ForumSectionPipe],
})
export class ForumModule {}
