import { ArticleCategoryDTO } from './category.dto';
import { ArticleCategory } from '@instinct-prj/interface';
import { ArticleCategoryRepository } from '../database/article';
import { ArticleCategoryEntity } from '../database/article';
export declare class ArticleCategoryController {
    private readonly articleCategoryRepo;
    constructor(articleCategoryRepo: ArticleCategoryRepository);
    getAllCategories(): Promise<ArticleCategory[]>;
    createCategory(categoryDTO: ArticleCategoryDTO): Promise<ArticleCategory>;
    updateCategory(category: ArticleCategoryEntity, categoryDTO: ArticleCategoryDTO): Promise<string>;
    deleteCategory(category: ArticleCategoryEntity): Promise<string>;
}
