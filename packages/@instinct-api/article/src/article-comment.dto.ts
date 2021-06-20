import {IsNotEmpty, IsString} from 'class-validator';
import {ArticleCommentDTO as ArticleCommentDTOI} from '@instinct-prj/interface';

export class ArticleCommentDTO implements ArticleCommentDTOI {
  @IsString()
  @IsNotEmpty()
  content!: string;
}
