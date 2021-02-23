import {ArticleComment} from '@instinct-prj/interface';

export interface DeleteCommentProps {
  comment: ArticleComment;
  onDelete(): void;
}
