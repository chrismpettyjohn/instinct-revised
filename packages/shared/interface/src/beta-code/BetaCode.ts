import {exampleUser, User} from '../user/User';

export interface BetaCode {
  code: string;
  user?: User;
}

export const exampleBetaCode: BetaCode = {
  code: '123-123-123',
  user: exampleUser,
};
