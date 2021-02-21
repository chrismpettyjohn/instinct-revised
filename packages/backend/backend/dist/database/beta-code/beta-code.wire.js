"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.betaCodeWire = void 0;
const user_wire_1 = require("../user/user/user.wire");
function betaCodeWire(entity) {
    return {
        code: entity.betaCode,
        user: entity.user ? user_wire_1.userWire(entity.user) : undefined,
    };
}
exports.betaCodeWire = betaCodeWire;
