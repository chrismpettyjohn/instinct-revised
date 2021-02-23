import { User } from '../user/User';
export interface ArticleComment {
    id: number;
    articleID: number;
    author: User;
    content: string;
    timestamp: number;
}
export declare const exampleArticleComment: ArticleComment;
