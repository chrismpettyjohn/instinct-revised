"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserLeaderBoardService = void 0;
const common_1 = require("@nestjs/common");
const user_1 = require("../database/user");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let UserLeaderBoardService = class UserLeaderBoardService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    getMostCredits(limit = 10) {
        return this.queryBuilder()
            .orderBy('user.credits', 'DESC')
            .limit(limit)
            .getMany();
    }
    getMostPixels(limit = 10) {
        return this.queryBuilder()
            .orderBy('user.pixels', 'DESC')
            .limit(limit)
            .getMany();
    }
    getMostPoints(limit = 10) {
        return this.queryBuilder()
            .orderBy('user.points', 'DESC')
            .limit(limit)
            .getMany();
    }
    queryBuilder() {
        return this.userRepository
            .createQueryBuilder('user')
            .innerJoin('user.rank', 'rank', 'rank.websiteShowStaff = :showStaff', {
            showStaff: '0',
        });
    }
};
UserLeaderBoardService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(user_1.UserEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserLeaderBoardService);
exports.UserLeaderBoardService = UserLeaderBoardService;
