import {Module} from '@nestjs/common';
import {SessionModule} from '../session';
import {ArticlePipe} from './article.pipe';
import {DatabaseModule} from '../database';
import {CategoryPipe} from './category.pipe';
import {ArticleController} from './article.controller';
import {ArticleCategoryController} from './category.controller';

@Module({
  imports: [SessionModule, DatabaseModule],
  controllers: [ArticleController, ArticleCategoryController],
  providers: [ArticlePipe, CategoryPipe],
  exports: [ArticlePipe, CategoryPipe],
})
export class ArticleModule {}
