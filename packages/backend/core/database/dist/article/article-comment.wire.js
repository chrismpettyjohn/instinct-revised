"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.articleCommentWire = void 0;
const user_wire_1 = require("../user/user/user.wire");
function articleCommentWire(entity) {
    return {
        id: entity.id,
        articleID: entity.articleID,
        author: user_wire_1.userWire(entity.user),
        content: entity.content,
        timestamp: entity.timestamp,
    };
}
exports.articleCommentWire = articleCommentWire;
