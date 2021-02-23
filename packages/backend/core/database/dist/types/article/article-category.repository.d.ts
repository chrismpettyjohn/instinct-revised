import { Repository } from 'typeorm';
import { BaseRepository } from '../base.repository';
import { ArticleCategoryEntity } from './article-category.entity';
export declare class ArticleCategoryRepository extends BaseRepository<ArticleCategoryEntity> {
    constructor(articleCategoryRepo: Repository<ArticleCategoryEntity>);
}
