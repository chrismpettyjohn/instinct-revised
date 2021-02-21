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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RankController = void 0;
const rank_pipe_1 = require("./rank.pipe");
const rank_dto_1 = require("./rank.dto");
const rank_1 = require("../database/rank");
const rank_2 = require("../database/rank");
const permission_scope_decorator_1 = require("../session/permission-scope.decorator");
const rank_3 = require("../database/rank");
const common_1 = require("@nestjs/common");
let RankController = class RankController {
    constructor(rankRepo) {
        this.rankRepo = rankRepo;
    }
    createRank(rankDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            const newRank = yield this.rankRepo.create(rank_3.rankDataTransferObjectToEntity(rankDTO));
            return rank_2.rankWire(newRank);
        });
    }
    getMany() {
        return __awaiter(this, void 0, void 0, function* () {
            const ranks = yield this.rankRepo.getAll();
            return ranks.map(rank => rank_2.rankWire(rank));
        });
    }
    getStaff() {
        return __awaiter(this, void 0, void 0, function* () {
            const ranks = yield this.rankRepo.getStaff();
            return ranks.map(rank => rank_2.rankWire(rank));
        });
    }
    getByID(rank) {
        return rank_2.rankWire(rank);
    }
    updateByID(rank, rankDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.rankRepo.update({ id: rank.id }, rank_3.rankDataTransferObjectToEntity(rankDTO));
            return 'Your changes have been saved';
        });
    }
    deleteByID(rank) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.rankRepo.delete({ id: rank.id });
            return 'Rank has been deleted';
        });
    }
};
__decorate([
    common_1.Post(),
    permission_scope_decorator_1.HasScope('websiteManageRanks'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [rank_dto_1.RankDTOClass]),
    __metadata("design:returntype", Promise)
], RankController.prototype, "createRank", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RankController.prototype, "getMany", null);
__decorate([
    common_1.Get('staff'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RankController.prototype, "getStaff", null);
__decorate([
    common_1.Get(':rankID'),
    __param(0, common_1.Param('rankID', rank_pipe_1.RankPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [rank_2.RankEntity]),
    __metadata("design:returntype", Object)
], RankController.prototype, "getByID", null);
__decorate([
    common_1.Patch(':rankID'),
    permission_scope_decorator_1.HasScope('websiteManageRanks'),
    __param(0, common_1.Param('rankID', rank_pipe_1.RankPipe)),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [rank_2.RankEntity,
        rank_dto_1.RankDTOClass]),
    __metadata("design:returntype", Promise)
], RankController.prototype, "updateByID", null);
__decorate([
    common_1.Delete(':rankID'),
    permission_scope_decorator_1.HasScope('websiteManageRanks'),
    __param(0, common_1.Param('rankID', rank_pipe_1.RankPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [rank_2.RankEntity]),
    __metadata("design:returntype", Promise)
], RankController.prototype, "deleteByID", null);
RankController = __decorate([
    common_1.Controller('ranks'),
    __metadata("design:paramtypes", [rank_1.RankRepository])
], RankController);
exports.RankController = RankController;
