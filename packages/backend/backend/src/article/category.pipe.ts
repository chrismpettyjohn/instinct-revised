import {PipeTransform, Injectable, NotFoundException} from '@nestjs/common';
import {ArticleCategoryEntity, ArticleCategoryRepository} from '../database';

@Injectable()
export class CategoryPipe implements PipeTransform {
  constructor(
    private readonly articleCategoryRepo: ArticleCategoryRepository
  ) {}

  async transform(categoryID: number): Promise<ArticleCategoryEntity> {
    try {
      return await this.articleCategoryRepo.findOneOrFail({id: categoryID});
    } catch {
      throw new NotFoundException('Article category does not exist');
    }
  }
}
