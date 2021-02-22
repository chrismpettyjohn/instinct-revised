import { User } from '../user/User';
import { ArticleCategory } from '../article/ArticleCategory';
import { ArticleComment } from './ArticleComment';
export interface Article {
    id: number;
    title: string;
    description: string;
    content: string;
    datePosted: number;
    headerImage: string;
    thumbnailImage: string;
    author: User;
    category: ArticleCategory;
    comments: ArticleComment[];
}
export declare const exampleArticle: Article;
