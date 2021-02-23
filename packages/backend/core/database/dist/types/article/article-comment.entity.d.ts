import { ArticleEntity } from './article.entity';
import { UserEntity } from '../user/user/user.entity';
export declare class ArticleCommentEntity {
    id?: number;
    content: string;
    timestamp: number;
    userID: number;
    user?: UserEntity;
    articleID: number;
    article?: ArticleEntity;
}
