import { ArticleDTO } from '@instinct-prj/interface';
export declare class CreateArticleDTO implements ArticleDTO {
    title: string;
    categoryID: number;
    description: string;
    content: string;
    headerImage: string;
    thumbnailImage: string;
}
export declare class UpdateArticleDTO implements Partial<ArticleDTO> {
    title?: string;
    categoryID?: number;
    description?: string;
    content?: string;
    headerImage?: string;
    thumbnailImage?: string;
}
