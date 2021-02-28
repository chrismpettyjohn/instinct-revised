import {User} from '../user';

export interface ForumPost {
  id: number;
  sectionID: number;
  title: string;
  body: string;
  user: User;
  createdAt: number;
  updatedAt: number;
}
