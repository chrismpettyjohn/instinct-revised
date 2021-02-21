import {exampleUser, User} from './User';

export interface UserGuestbookPost {
  id: number;
  profileID: number;
  author: User;
  content: string;
  timestamp: number;
}

export const exampleUserGuestbookPost: UserGuestbookPost = {
  id: 1,
  profileID: 1,
  author: exampleUser,
  content: 'nice job mate',
  timestamp: 0,
};

export interface UserGuestbookPostDTO {
  content: string;
}
