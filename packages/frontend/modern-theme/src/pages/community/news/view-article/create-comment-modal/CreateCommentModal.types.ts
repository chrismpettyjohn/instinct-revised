import {Article, ArticleComment} from '@instinct-prj/interface';

export interface CreateCommentModalProps {
  article: Article;
  onCreation(comment: ArticleComment): void;
}
