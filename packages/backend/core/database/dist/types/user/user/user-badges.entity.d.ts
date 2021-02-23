import { UserEntity } from './user.entity';
import { Badge } from '@instinct-prj/interface';
export declare function badgeWire(badge: UserBadgesEntity): Badge;
export declare class UserBadgesEntity {
    id?: number;
    userID: number;
    user?: UserEntity;
    slotID: number;
    code: string;
}
