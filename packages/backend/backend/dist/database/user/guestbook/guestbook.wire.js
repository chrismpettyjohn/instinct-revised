"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userGuestbookWire = void 0;
const user_wire_1 = require("../user/user.wire");
function userGuestbookWire(entity) {
    return {
        id: entity.id,
        profileID: entity.profileID,
        author: user_wire_1.userWire(entity.author),
        content: entity.content,
        timestamp: entity.timestamp,
    };
}
exports.userGuestbookWire = userGuestbookWire;
