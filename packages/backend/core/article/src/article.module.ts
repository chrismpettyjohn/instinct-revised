import {Module} from '@nestjs/common';
import {ArticlePipe} from './article.pipe';
import {CategoryPipe} from './category.pipe';
import {ArticleController} from './article.controller';
import {SessionModule} from '@instinct-prj/session-api';
import {ArticleCommentPipe} from './article-comment.pipe';
import {DatabaseModule} from '@instinct-prj/database-api';
import {ArticleCategoryController} from './category.controller';
import {ArticleCommentController} from './article-comment.controller';

@Module({
  imports: [SessionModule, DatabaseModule],
  controllers: [
    ArticleController,
    ArticleCategoryController,
    ArticleCommentController,
  ],
  providers: [ArticlePipe, CategoryPipe, ArticleCommentPipe],
  exports: [ArticlePipe, CategoryPipe, ArticleCommentPipe],
})
export class ArticleModule {}
