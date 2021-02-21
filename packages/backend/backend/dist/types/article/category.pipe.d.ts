import { PipeTransform } from '@nestjs/common';
import { ArticleCategoryEntity, ArticleCategoryRepository } from '../database';
export declare class CategoryPipe implements PipeTransform {
    private readonly articleCategoryRepo;
    constructor(articleCategoryRepo: ArticleCategoryRepository);
    transform(categoryID: number): Promise<ArticleCategoryEntity>;
}
