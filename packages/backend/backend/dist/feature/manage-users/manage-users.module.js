"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManageUsersModule = void 0;
const common_1 = require("@nestjs/common");
const user_module_1 = require("../../user/user.module");
const rank_module_1 = require("../../rank/rank.module");
const session_module_1 = require("../../session/session.module");
const database_module_1 = require("../../database/database.module");
const manage_users_controller_1 = require("./manage-users.controller");
let ManageUsersModule = class ManageUsersModule {
};
ManageUsersModule = __decorate([
    common_1.Module({
        imports: [database_module_1.DatabaseModule, user_module_1.UserModule, rank_module_1.RankModule, session_module_1.SessionModule],
        controllers: [manage_users_controller_1.ManageUsersController],
    })
], ManageUsersModule);
exports.ManageUsersModule = ManageUsersModule;
