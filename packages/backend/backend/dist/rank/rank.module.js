"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RankModule = void 0;
const rank_pipe_1 = require("./rank.pipe");
const common_1 = require("@nestjs/common");
const database_1 = require("../database");
const rank_constraint_1 = require("./rank.constraint");
const rank_controller_1 = require("./rank.controller");
let RankModule = class RankModule {
};
RankModule = __decorate([
    common_1.Module({
        imports: [database_1.DatabaseModule],
        controllers: [rank_controller_1.RankController],
        providers: [rank_pipe_1.RankPipe, rank_constraint_1.RankConstraint],
        exports: [rank_pipe_1.RankPipe, rank_constraint_1.RankConstraint],
    })
], RankModule);
exports.RankModule = RankModule;
