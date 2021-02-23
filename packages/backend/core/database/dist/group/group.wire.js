"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.groupWire = void 0;
const moment_1 = __importDefault(require("moment"));
const user_1 = require("../user");
function groupWire(groupEntity) {
    return {
        id: groupEntity.id,
        name: groupEntity.name,
        desc: groupEntity.description,
        user: groupEntity.user ? user_1.userWire(groupEntity.user) : undefined,
        badge: groupEntity.badge,
        roomID: groupEntity.roomID,
        dateCreated: moment_1.default.unix(groupEntity.dateCreated).toISOString(),
    };
}
exports.groupWire = groupWire;
