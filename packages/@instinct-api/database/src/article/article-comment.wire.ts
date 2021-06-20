import {userWire} from '../user/user/user.wire';
import {ArticleComment} from '@instinct-prj/interface';
import {ArticleCommentEntity} from './article-comment.entity';

export function articleCommentWire(
  entity: ArticleCommentEntity
): ArticleComment {
  return {
    id: entity.id!,
    articleID: entity.articleID,
    author: userWire(entity.user!),
    content: entity.content,
    timestamp: entity.timestamp,
  };
}
