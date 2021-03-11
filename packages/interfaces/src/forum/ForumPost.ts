import {exampleUser, User} from '../user';

export interface ForumPost {
  id: number;
  sectionID: number;
  title: string;
  body: string;
  user: User;
  createdAt: number;
  updatedAt: number;
}

export const exampleForumPost: ForumPost = {
  id: 1,
  sectionID: 1,
  title: '',
  body: '',
  user: exampleUser,
  createdAt: 1,
  updatedAt: 1,
};
