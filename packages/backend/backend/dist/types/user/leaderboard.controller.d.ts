import { User } from '@instinct-prj/interface';
import { UserLeaderBoardService } from './leaderboard.service';
export declare class UserLeaderBoardController {
    private readonly userLeaderBoardService;
    constructor(userLeaderBoardService: UserLeaderBoardService);
    getMostCredits(): Promise<User[]>;
    getMostPixels(): Promise<User[]>;
    getMostPoints(): Promise<User[]>;
}
