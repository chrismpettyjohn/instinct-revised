"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstinctModule = void 0;
const common_1 = require("@nestjs/common");
const user_module_1 = require("./user/user.module");
const room_module_1 = require("./room/room.module");
const rank_module_1 = require("./rank/rank.module");
const photo_module_1 = require("./photo/photo.module");
const group_module_1 = require("./group/group.module");
const health_module_1 = require("./health/health.module");
const common_module_1 = require("./common/common.module");
const config_module_1 = require("./config/config.module");
const article_module_1 = require("./article/article.module");
const session_module_1 = require("./session/session.module");
const feature_module_1 = require("./feature/feature.module");
const emulator_module_1 = require("./emulator/emulator.module");
const database_module_1 = require("./database/database.module");
const beta_code_module_1 = require("./beta-code/beta-code.module");
let InstinctModule = class InstinctModule {
};
InstinctModule = __decorate([
    common_1.Module({
        imports: [
            user_module_1.UserModule,
            rank_module_1.RankModule,
            room_module_1.RoomModule,
            photo_module_1.PhotoModule,
            group_module_1.GroupModule,
            config_module_1.ConfigModule,
            common_module_1.CommonModule,
            article_module_1.ArticleModule,
            health_module_1.HealthModule,
            session_module_1.SessionModule,
            feature_module_1.FeatureModule,
            emulator_module_1.EmulatorModule,
            database_module_1.DatabaseModule,
            beta_code_module_1.BetaCodeModule,
        ],
        exports: [
            user_module_1.UserModule,
            rank_module_1.RankModule,
            room_module_1.RoomModule,
            photo_module_1.PhotoModule,
            group_module_1.GroupModule,
            config_module_1.ConfigModule,
            common_module_1.CommonModule,
            article_module_1.ArticleModule,
            feature_module_1.FeatureModule,
            health_module_1.HealthModule,
            session_module_1.SessionModule,
            emulator_module_1.EmulatorModule,
            database_module_1.DatabaseModule,
            beta_code_module_1.BetaCodeModule,
        ],
    })
], InstinctModule);
exports.InstinctModule = InstinctModule;
