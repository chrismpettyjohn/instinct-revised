"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rankDataTransferObjectToEntity = exports.rankWire = void 0;
const user_1 = require("../user");
const rank_types_1 = require("./rank.types");
function rankWire(rankEntity) {
    return {
        id: rankEntity.id,
        name: rankEntity.name,
        badge: rankEntity.badge,
        users: rankEntity.users !== undefined
            ? rankEntity.users.map(user => user_1.userWire(user))
            : undefined,
        permissions: {
            websiteManageBans: rank_types_1.permissionStatusToBoolean(rankEntity.websiteManageBans),
            websiteManageConfig: rank_types_1.permissionStatusToBoolean(rankEntity.websiteManageConfig),
            websiteManageUsers: rank_types_1.permissionStatusToBoolean(rankEntity.websiteManageUsers),
            websiteManageRanks: rank_types_1.permissionStatusToBoolean(rankEntity.websiteManageRanks),
            websiteManageNews: rank_types_1.permissionStatusToBoolean(rankEntity.websiteManageNews),
            websiteShowStaff: rank_types_1.permissionStatusToBoolean(rankEntity.websiteShowStaff),
            websiteShowAdminPanel: rank_types_1.permissionStatusToBoolean(rankEntity.websiteShowAdminPanel),
            websiteAdminClient: rank_types_1.permissionStatusToBoolean(rankEntity.websiteAdminClient),
            websiteManageBetaCodes: rank_types_1.permissionStatusToBoolean(rankEntity.websiteManageBetaCodes),
            websiteManageGuestbook: rank_types_1.permissionStatusToBoolean(rankEntity.websiteManageGuestbook),
            websiteManageEmulator: rank_types_1.permissionStatusToBoolean(rankEntity.websiteManageEmulator),
        },
    };
}
exports.rankWire = rankWire;
function rankDataTransferObjectToEntity(rankDTO) {
    return {
        name: rankDTO.name,
        badge: rankDTO.badge,
        level: rankDTO.level,
        websiteManageBans: rank_types_1.booleanToPermissionStatus(rankDTO.websiteManageBans),
        websiteManageConfig: rank_types_1.booleanToPermissionStatus(rankDTO.websiteManageConfig),
        websiteManageUsers: rank_types_1.booleanToPermissionStatus(rankDTO.websiteManageUsers),
        websiteManageRanks: rank_types_1.booleanToPermissionStatus(rankDTO.websiteManageRanks),
        websiteManageNews: rank_types_1.booleanToPermissionStatus(rankDTO.websiteManageNews),
        websiteShowStaff: rank_types_1.booleanToPermissionStatus(rankDTO.websiteShowStaff),
        websiteShowAdminPanel: rank_types_1.booleanToPermissionStatus(rankDTO.websiteShowAdminPanel),
        websiteAdminClient: rank_types_1.booleanToPermissionStatus(rankDTO.websiteAdminClient),
        websiteManageBetaCodes: rank_types_1.booleanToPermissionStatus(rankDTO.websiteManageBetaCodes),
        websiteManageGuestbook: rank_types_1.booleanToPermissionStatus(rankDTO.websiteManageGuestbook),
        websiteManageEmulator: rank_types_1.booleanToPermissionStatus(rankDTO.websiteManageEmulator),
    };
}
exports.rankDataTransferObjectToEntity = rankDataTransferObjectToEntity;
