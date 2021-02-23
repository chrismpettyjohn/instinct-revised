"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseRepositories = exports.databaseEntities = void 0;
const rank_1 = require("./rank");
const room_1 = require("./room");
const photo_1 = require("./photo");
const group_1 = require("./group");
const config_1 = require("./config");
const beta_code_1 = require("./beta-code");
const bans_1 = require("./user/bans");
const user_1 = require("./user/user");
const guestbook_1 = require("./user/guestbook");
const forgot_password_1 = require("./user/forgot-password");
const emulator_1 = require("./emulator");
const article_1 = require("./article");
exports.databaseEntities = [
    rank_1.RankEntity,
    user_1.UserEntity,
    room_1.RoomEntity,
    photo_1.PhotoEntity,
    group_1.GroupEntity,
    config_1.ConfigEntity,
    bans_1.UserBanEntity,
    article_1.ArticleEntity,
    beta_code_1.BetaCodeEntity,
    user_1.UserBadgesEntity,
    emulator_1.EmulatorTextsEntity,
    guestbook_1.UserGuestbookEntity,
    article_1.ArticleCommentEntity,
    article_1.ArticleCategoryEntity,
    emulator_1.EmulatorSettingsEntity,
    forgot_password_1.UserForgotPasswordEntity,
];
exports.databaseRepositories = [
    rank_1.RankRepository,
    user_1.UserRepository,
    room_1.RoomRepository,
    group_1.GroupRepository,
    photo_1.PhotoRepository,
    config_1.ConfigRepository,
    article_1.ArticleRepository,
    bans_1.UserBanRepository,
    beta_code_1.BetaCodeRepository,
    emulator_1.EmulatorTextsRepository,
    guestbook_1.UserGuestbookRepository,
    article_1.ArticleCommentRepository,
    article_1.ArticleCategoryRepository,
    emulator_1.EmulatorSettingsRepository,
    forgot_password_1.UserForgotPasswordRepository,
];
