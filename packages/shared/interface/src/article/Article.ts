import {exampleUser, User} from '../user/User';
import {
  ArticleCategory,
  exampleArticleCategory,
} from '../article/ArticleCategory';
import {ArticleComment, exampleArticleComment} from './ArticleComment';

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

export const exampleArticle: Article = {
  id: 1,
  title: 'Test Article',
  description: 'Testing the list-articles',
  content: 'I am testing the list-articles',
  datePosted: +new Date() / 1000,
  headerImage: '/img/article-1.png',
  thumbnailImage: '/img/article-1.png',
  author: exampleUser,
  category: exampleArticleCategory,
  comments: [exampleArticleComment],
};
