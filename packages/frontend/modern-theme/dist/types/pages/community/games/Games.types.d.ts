import { User } from '@instinct-prj/interface';
export interface GamesCardState {
    users: User[];
    showSpinner: boolean;
}
export declare const defaultGamesCardState: GamesCardState;
