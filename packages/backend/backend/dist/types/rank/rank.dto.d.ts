import { RankDTO } from '@instinct-prj/interface';
export declare class RankDTOClass implements RankDTO {
    name: string;
    badge: string;
    level: number;
    users: number[];
    websiteAdminClient: boolean;
    websiteShowStaff: boolean;
    websiteShowAdminPanel: boolean;
    websiteManageNews: boolean;
    websiteManageRanks: boolean;
    websiteManageUsers: boolean;
    websiteManageBans: boolean;
    websiteManageConfig: boolean;
    websiteManageBetaCodes: boolean;
    websiteManageGuestbook: boolean;
    websiteManageEmulator: boolean;
}
