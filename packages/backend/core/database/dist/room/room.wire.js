"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roomWire = void 0;
const user_1 = require("../user");
function roomWire(roomEntity) {
    return {
        id: roomEntity.id,
        user: roomEntity.owner ? user_1.userWire(roomEntity.owner) : undefined,
        name: roomEntity.name,
        desc: roomEntity.description,
        currentUsers: roomEntity.users,
        maxUsers: roomEntity.usersMax,
    };
}
exports.roomWire = roomWire;
