import { Repository } from 'typeorm';
import { BaseRepository } from '../base.repository';
import { ArticleCommentEntity } from './article-comment.entity';
export declare class ArticleCommentRepository extends BaseRepository<ArticleCommentEntity> {
    constructor(articleCommentRepo: Repository<ArticleCommentEntity>);
}
