import {userWire} from '../user';
import {ArticleEntity} from './article.entity';
import {Article} from '@instinct-prj/interface';
import {articleCategoryWire} from './article-category.wire';
import {articleCommentWire} from './article-comment.wire';

export function articleWire(articleEntity: ArticleEntity): Article {
  return {
    id: articleEntity.id!,
    title: articleEntity.title,
    headerImage: articleEntity.headerImage,
    thumbnailImage: articleEntity.thumbnailImage,
    datePosted: articleEntity.timestamp,
    description: articleEntity.description,
    content: articleEntity.content,
    author: userWire(articleEntity.author!),
    category: articleCategoryWire(articleEntity.category!),
    comments: articleEntity.comments!.map(_ => articleCommentWire(_)),
  };
}
