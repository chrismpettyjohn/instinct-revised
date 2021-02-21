import {exampleUser, User} from './User';

export interface UserBan {
  id: number;
  user: User;
  bannedBy: User;
  banStart: number;
  banEnd: number;
  banReason: string;
}

export const exampleUserBan: UserBan = {
  id: 1,
  user: exampleUser,
  bannedBy: exampleUser,
  banStart: +new Date() / 1000,
  banEnd: +new Date() / 1000,
  banReason: 'You are a bad user!',
};
