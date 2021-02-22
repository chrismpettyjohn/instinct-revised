import {ArticlePipe} from './article.pipe';
import {UserEntity} from '../database/user/user';
import {HasSession, GetSession} from '../session';
import {ArticleCommentDTO} from './article-comment.dto';
import {ArticleCommentRepository} from '../database/article';
import {ArticleCommentPipe} from './article-comment.pipe';
import {Body, Controller, Delete, Param, Post} from '@nestjs/common';
import {ArticleCommentEntity, ArticleEntity} from '../database/article';
import {articleCommentWire} from '../database/article/article-comment.wire';

@Controller('articles/:articleID/comments')
@HasSession()
export class ArticleCommentController {
  constructor(private readonly articleCommentRepo: ArticleCommentRepository) {}

  @Post()
  async createComment(
    @Param('articleID', ArticlePipe) article: ArticleEntity,
    @Body() comment: ArticleCommentDTO,
    @GetSession() user: UserEntity
  ) {
    const newComment = await this.articleCommentRepo.create({
      content: comment.content,
      articleID: article.id!,
      userID: user.id!,
      timestamp: Number(+new Date() / 1000),
    });
    return articleCommentWire(newComment);
  }

  @Delete(':commentID')
  async deleteComment(
    @Param('commentID', ArticleCommentPipe) comment: ArticleCommentEntity
  ) {
    await this.articleCommentRepo.delete({id: comment.id!});
  }
}
