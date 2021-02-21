import {exampleUser, User} from '../user/User';

export interface Photo {
  id: number;
  createdAt: number;
  userID: number;
  user?: User;
  roomID: number;
  imagePath: string;
}

export const examplePhoto: Photo = {
  id: 1,
  createdAt: +new Date() / 1000,
  userID: exampleUser.id,
  user: exampleUser,
  roomID: 1,
  imagePath: '/photos/1.png',
};
