import {ArticleCommentEntity, ArticleCommentRepository} from '../database';
import {PipeTransform, Injectable, NotFoundException} from '@nestjs/common';

@Injectable()
export class ArticleCommentPipe implements PipeTransform {
  constructor(private readonly articleCommentRepo: ArticleCommentRepository) {}

  async transform(articleCommentID: number): Promise<ArticleCommentEntity> {
    const articleComment = await this.articleCommentRepo.findOneOrFail({
      id: articleCommentID,
    });

    if (!articleComment) {
      throw new NotFoundException(
        `Article Comment ${articleCommentID} does not exist`
      );
    }

    return articleComment;
  }
}
