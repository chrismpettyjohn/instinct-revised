import { ArticleEntity } from './article.entity';
export declare class ArticleCategoryEntity {
    id?: number;
    name: string;
    color: string;
    articles?: ArticleEntity[];
}
