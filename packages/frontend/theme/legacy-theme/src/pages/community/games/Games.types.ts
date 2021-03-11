import {User} from '@instinct-prj/interface';

export interface GamesCardState {
  users: User[];
  showSpinner: boolean;
}

export const defaultGamesCardState: GamesCardState = {
  users: [],
  showSpinner: true,
};
