"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userBanWire = void 0;
const user_wire_1 = require("../user/user.wire");
function userBanWire(banEntity) {
    return {
        id: banEntity.id,
        user: user_wire_1.userWire(banEntity.user),
        bannedBy: user_wire_1.userWire(banEntity.staffMember),
        banStart: banEntity.banStartedTimestamp,
        banEnd: banEntity.banExpirationTimestamp,
        banReason: banEntity.banReason,
    };
}
exports.userBanWire = userBanWire;
