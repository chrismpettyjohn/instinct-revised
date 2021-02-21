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
exports.UserLeaderBoardController = void 0;
const common_1 = require("@nestjs/common");
const leaderboard_service_1 = require("./leaderboard.service");
const user_1 = require("../database/user");
let UserLeaderBoardController = class UserLeaderBoardController {
    constructor(userLeaderBoardService) {
        this.userLeaderBoardService = userLeaderBoardService;
    }
    getMostCredits() {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield this.userLeaderBoardService.getMostCredits();
            return users.map(user => user_1.userWire(user));
        });
    }
    getMostPixels() {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield this.userLeaderBoardService.getMostPixels();
            return users.map(user => user_1.userWire(user));
        });
    }
    getMostPoints() {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield this.userLeaderBoardService.getMostPoints();
            return users.map(user => user_1.userWire(user));
        });
    }
};
__decorate([
    common_1.Get('credits'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserLeaderBoardController.prototype, "getMostCredits", null);
__decorate([
    common_1.Get('pixels'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserLeaderBoardController.prototype, "getMostPixels", null);
__decorate([
    common_1.Get('points'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserLeaderBoardController.prototype, "getMostPoints", null);
UserLeaderBoardController = __decorate([
    common_1.Controller('users/leaderboard'),
    __metadata("design:paramtypes", [leaderboard_service_1.UserLeaderBoardService])
], UserLeaderBoardController);
exports.UserLeaderBoardController = UserLeaderBoardController;
