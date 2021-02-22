import {Rank} from '../rank/Rank';

export interface User {
  id: number;
  username: string;
  motto: string;
  credits: number;
  pixels: number;
  points: number;
  online: boolean;
  figure: string;
  favoriteYoutubeVideo: string;
  joinDate: string; // ISO Date
  lastLoginDate: string; // ISO Date
  userOfTheWeek: boolean;
  rank?: Omit<Rank, 'users'>;
}

export const exampleUser: User = {
  id: 1,
  username: 'Test',
  motto: 'I am a test!',
  credits: 1,
  pixels: 1,
  points: 1,
  online: false,
  figure: 'sh-908-92.hd-180-1015.lg-285-77.hr-828-158640.ch-210-153640',
  favoriteYoutubeVideo: 'GfxcnX7XWfg',
  joinDate: new Date().toISOString(),
  lastLoginDate: new Date().toISOString(),
  userOfTheWeek: false,
};

export interface InternalUser
  extends Omit<User, 'joinDate' | 'lastLoginDate' | 'rank' | 'online'> {
  email: string;
  rankID: number;
}

export interface InternalUserDTO
  extends Partial<Omit<InternalUser, 'userOfTheWeek'>> {
  userOfTheWeek: number;
  password: string;
}

export type UpdateInternalUserDTO = Partial<InternalUserDTO>;
