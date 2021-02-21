"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupModule = void 0;
const group_pipe_1 = require("./group.pipe");
const common_1 = require("@nestjs/common");
const group_service_1 = require("./group.service");
const group_controller_1 = require("./group.controller");
const database_module_1 = require("../database/database.module");
let GroupModule = class GroupModule {
};
GroupModule = __decorate([
    common_1.Module({
        imports: [database_module_1.DatabaseModule],
        controllers: [group_controller_1.GroupController],
        providers: [group_pipe_1.GroupPipe, group_service_1.GroupService],
        exports: [group_pipe_1.GroupPipe, group_service_1.GroupService],
    })
], GroupModule);
exports.GroupModule = GroupModule;
