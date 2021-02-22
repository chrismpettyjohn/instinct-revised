import {userWire} from '../user';
import {RankEntity} from './rank.entity';
import {Rank, RankDTO} from '@instinct-prj/interface';
import {
  booleanToPermissionStatus,
  permissionStatusToBoolean,
} from './rank.types';

export function rankWire(rankEntity: RankEntity): Rank {
  return {
    id: rankEntity.id!,
    name: rankEntity.name,
    badge: rankEntity.badge,
    users:
      rankEntity.users !== undefined
        ? rankEntity.users!.map(user => userWire(user))
        : undefined,
    permissions: {
      websiteManageBans: permissionStatusToBoolean(
        rankEntity.websiteManageBans
      ),
      websiteManageConfig: permissionStatusToBoolean(
        rankEntity.websiteManageConfig
      ),
      websiteManageUsers: permissionStatusToBoolean(
        rankEntity.websiteManageUsers
      ),
      websiteManageRanks: permissionStatusToBoolean(
        rankEntity.websiteManageRanks
      ),
      websiteManageNews: permissionStatusToBoolean(
        rankEntity.websiteManageNews
      ),
      websiteShowStaff: permissionStatusToBoolean(rankEntity.websiteShowStaff),
      websiteShowAdminPanel: permissionStatusToBoolean(
        rankEntity.websiteShowAdminPanel
      ),
      websiteAdminClient: permissionStatusToBoolean(
        rankEntity.websiteAdminClient
      ),
      websiteManageBetaCodes: permissionStatusToBoolean(
        rankEntity.websiteManageBetaCodes
      ),
      websiteManageGuestbook: permissionStatusToBoolean(
        rankEntity.websiteManageGuestbook
      ),
      websiteManageEmulator: permissionStatusToBoolean(
        rankEntity.websiteManageEmulator
      ),
      websiteManageComments: permissionStatusToBoolean(
        rankEntity.websiteManageComments
      ),
    },
  };
}

export function rankDataTransferObjectToEntity(rankDTO: RankDTO): RankEntity {
  return {
    name: rankDTO.name,
    badge: rankDTO.badge,
    level: rankDTO.level,
    websiteManageBans: booleanToPermissionStatus(rankDTO.websiteManageBans),
    websiteManageConfig: booleanToPermissionStatus(rankDTO.websiteManageConfig),
    websiteManageUsers: booleanToPermissionStatus(rankDTO.websiteManageUsers),
    websiteManageRanks: booleanToPermissionStatus(rankDTO.websiteManageRanks),
    websiteManageNews: booleanToPermissionStatus(rankDTO.websiteManageNews),
    websiteShowStaff: booleanToPermissionStatus(rankDTO.websiteShowStaff),
    websiteShowAdminPanel: booleanToPermissionStatus(
      rankDTO.websiteShowAdminPanel
    ),
    websiteAdminClient: booleanToPermissionStatus(rankDTO.websiteAdminClient),
    websiteManageBetaCodes: booleanToPermissionStatus(
      rankDTO.websiteManageBetaCodes
    ),
    websiteManageGuestbook: booleanToPermissionStatus(
      rankDTO.websiteManageGuestbook
    ),
    websiteManageEmulator: booleanToPermissionStatus(
      rankDTO.websiteManageEmulator
    ),
    websiteManageComments: booleanToPermissionStatus(
      rankDTO.websiteManageComments
    ),
  };
}
