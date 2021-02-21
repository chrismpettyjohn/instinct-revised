import { PermissionStatus } from './rank.types';
import { UserEntity } from '../user/user/user.entity';
export declare class RankEntity {
    id?: number;
    name: string;
    badge: string;
    level: number;
    users?: UserEntity[];
    websiteAdminClient: PermissionStatus;
    websiteShowStaff: PermissionStatus;
    websiteShowAdminPanel: PermissionStatus;
    websiteManageNews: PermissionStatus;
    websiteManageRanks: PermissionStatus;
    websiteManageUsers: PermissionStatus;
    websiteManageBans: PermissionStatus;
    websiteManageConfig: PermissionStatus;
    websiteManageBetaCodes: PermissionStatus;
    websiteManageGuestbook: PermissionStatus;
    websiteManageEmulator: PermissionStatus;
}
