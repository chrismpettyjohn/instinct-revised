import { UserEntity } from '../user/user/user.entity';
import { ArticleCommentEntity } from './article-comment.entity';
import { ArticleCategoryEntity } from './article-category.entity';
export declare class ArticleEntity {
    id?: number;
    title: string;
    description: string;
    content: string;
    categoryID: number;
    category?: ArticleCategoryEntity;
    headerImage: string;
    thumbnailImage: string;
    timestamp: number;
    userID: number;
    author?: UserEntity;
    comments?: ArticleCommentEntity[];
}
