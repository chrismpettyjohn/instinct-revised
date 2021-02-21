import { User } from '../user/User';
import { ArticleCategory } from '../article/ArticleCategory';
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
}
export declare const exampleArticle: Article;
