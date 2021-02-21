"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const user_pipe_1 = require("./user.pipe");
const common_1 = require("@nestjs/common");
const common_2 = require("../common");
const ban_pipe_1 = require("./ban.pipe");
const beta_code_1 = require("../beta-code");
const database_1 = require("../database");
const constraint_1 = require("./constraint");
const user_controller_1 = require("./user.controller");
const ban_controller_1 = require("./ban.controller");
const google_module_1 = require("../google/google.module");
const leaderboard_service_1 = require("./leaderboard.service");
const leaderboard_controller_1 = require("./leaderboard.controller");
let UserModule = class UserModule {
};
UserModule = __decorate([
    common_1.Module({
        imports: [common_2.CommonModule, database_1.DatabaseModule, google_module_1.GoogleModule, beta_code_1.BetaCodeModule],
        controllers: [user_controller_1.UserController, leaderboard_controller_1.UserLeaderBoardController, ban_controller_1.UserBanController],
        providers: [
            user_pipe_1.UserPipe,
            leaderboard_service_1.UserLeaderBoardService,
            ban_pipe_1.UserBanPipe,
            ...constraint_1.userConstraints,
        ],
        exports: [user_pipe_1.UserPipe, leaderboard_service_1.UserLeaderBoardService, ban_pipe_1.UserBanPipe, ...constraint_1.userConstraints],
    })
], UserModule);
exports.UserModule = UserModule;
