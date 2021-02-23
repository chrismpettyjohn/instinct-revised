import {User, UserProfile} from '@instinct-prj/interface';

export interface UserTypes {
  create(
    username: string,
    password: string,
    email: string,
    recaptcha: string,
    betaCode?: string
  ): Promise<User>;

  getByUsername(username: string): Promise<UserProfile>;

  getByID(userID: number): Promise<User>;

  getMostCredits(): Promise<User[]>;

  getMostPixels(): Promise<User[]>;

  getMostPoints(): Promise<User[]>;

  getOnline(): Promise<User[]>;

  getUserOfTheWeek(): Promise<User[]>;
}
