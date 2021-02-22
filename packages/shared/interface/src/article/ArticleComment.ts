import {exampleUser, User} from '../user/User';

export interface ArticleComment {
  id: number;
  articleID: number;
  author: User;
  content: string;
  timestamp: number;
}

export const exampleArticleComment: ArticleComment = {
  id: 1,
  articleID: 1,
  author: exampleUser,
  content: 'hello',
  timestamp: 123,
};
