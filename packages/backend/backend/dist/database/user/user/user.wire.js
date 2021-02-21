"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.internalUserWire = exports.userWire = void 0;
const lodash_1 = require("lodash");
const moment_1 = __importDefault(require("moment"));
const rank_1 = require("../../rank");
function userWire(userEntity) {
    return {
        id: userEntity.id,
        username: userEntity.username,
        motto: userEntity.motto,
        credits: userEntity.credits,
        pixels: userEntity.pixels,
        points: userEntity.points,
        online: userEntity.online === '1',
        figure: userEntity.figure,
        joinDate: moment_1.default.unix(userEntity.accountCreated).toISOString(),
        lastLoginDate: moment_1.default.unix(userEntity.lastLogin).toISOString(),
        rank: userEntity.rank !== undefined ? rank_1.rankWire(userEntity.rank) : undefined,
        favoriteYoutubeVideo: userEntity.favoriteYoutubeVideo,
        userOfTheWeek: userEntity.userOfTheWeek === 1,
    };
}
exports.userWire = userWire;
function internalUserWire(userEntity) {
    return Object.assign(Object.assign({}, lodash_1.omit(userWire(userEntity), 'rank')), { email: userEntity.email, rankID: userEntity.rankID });
}
exports.internalUserWire = internalUserWire;
