import { Article, ArticleCategory, ArticleDTO } from '@instinct-prj/interface';
export interface ArticleTypes {
    getAll(): Promise<Article[]>;
    getByID(articleID: string): Promise<Article>;
    create(articleDTO: ArticleDTO): Promise<Article>;
    updateByID(articleID: string, articleDTO: Partial<ArticleDTO>): Promise<void>;
    deleteByID(articleID: number): Promise<void>;
    getAllCategories(): Promise<ArticleCategory[]>;
    createCategory(name: string, color: string): Promise<ArticleCategory>;
    deleteCategoryByID(categoryID: number): Promise<void>;
}
