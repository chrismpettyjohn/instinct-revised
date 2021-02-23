import {Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from '../base.repository';
import {ArticleCategoryEntity} from './article-category.entity';

@Injectable()
export class ArticleCategoryRepository extends BaseRepository<ArticleCategoryEntity> {
  constructor(
    @InjectRepository(ArticleCategoryEntity)
    articleCategoryRepo: Repository<ArticleCategoryEntity>
  ) {
    super(articleCategoryRepo, []);
  }
}
