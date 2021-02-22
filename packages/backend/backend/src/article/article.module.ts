import {Module} from '@nestjs/common';
import {SessionModule} from '../session';
import {ArticlePipe} from './article.pipe';
import {DatabaseModule} from '../database';
import {CategoryPipe} from './category.pipe';
import {ArticleController} from './article.controller';
import {ArticleCategoryController} from './category.controller';
import {ArticleCommentController} from './article-comment.controller';
import {ArticleCommentPipe} from './article-comment.pipe';

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
