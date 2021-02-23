import { Rank } from './Rank';
export interface RankDTO {
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
    websiteManageComments: boolean;
}
export declare function rankWireToRankDTO(rankWire: Rank): RankDTO;
