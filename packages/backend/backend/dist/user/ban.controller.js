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
exports.UserBanController = void 0;
const session_1 = require("../session");
const permission_scope_decorator_1 = require("../session/permission-scope.decorator");
const ban_dto_1 = require("./ban.dto");
const user_1 = require("../database/user");
const common_1 = require("@nestjs/common");
let UserBanController = class UserBanController {
    constructor(userRepo, userBanRepo) {
        this.userRepo = userRepo;
        this.userBanRepo = userBanRepo;
    }
    createBan(ban, session) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userRepo.findOneOrFail({ id: ban.userID });
            const newBan = yield this.userBanRepo.create({
                userID: user.id,
                ipAddress: user.ipCurrent,
                machineID: (_a = user.machineID) !== null && _a !== void 0 ? _a : '',
                staffID: session.id,
                banReason: ban.reason,
                banStartedTimestamp: ban.banStart,
                banExpirationTimestamp: ban.banEnd,
            });
            return user_1.userBanWire(newBan);
        });
    }
    getAllBans() {
        return __awaiter(this, void 0, void 0, function* () {
            const bans = yield this.userBanRepo.find();
            return bans.map(_ => user_1.userBanWire(_));
        });
    }
    getBanByID(banID) {
        return __awaiter(this, void 0, void 0, function* () {
            const ban = yield this.userBanRepo.findOneOrFail({ id: banID });
            return user_1.userBanWire(ban);
        });
    }
    updateBanByID(banID, banDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.userBanRepo.update({ id: banID }, ban_dto_1.userBanDataTransferObjectToEntity(banDTO));
            return 'Your changes have been saved';
        });
    }
    deleteBanByID(banID) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.userBanRepo.delete({ id: banID });
            return 'Ban has been deleted';
        });
    }
};
__decorate([
    common_1.Post(),
    permission_scope_decorator_1.HasScope('websiteManageBans'),
    __param(0, common_1.Body()),
    __param(1, session_1.GetSession()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ban_dto_1.UserBanDTOClass,
        user_1.UserEntity]),
    __metadata("design:returntype", Promise)
], UserBanController.prototype, "createBan", null);
__decorate([
    common_1.Get(),
    permission_scope_decorator_1.HasScope('websiteManageBans'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserBanController.prototype, "getAllBans", null);
__decorate([
    common_1.Get(':banID'),
    permission_scope_decorator_1.HasScope('websiteManageBans'),
    __param(0, common_1.Param('banID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserBanController.prototype, "getBanByID", null);
__decorate([
    common_1.Patch(':banID'),
    permission_scope_decorator_1.HasScope('websiteManageBans'),
    __param(0, common_1.Param('banID')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], UserBanController.prototype, "updateBanByID", null);
__decorate([
    common_1.Delete(':banID'),
    permission_scope_decorator_1.HasScope('websiteManageBans'),
    __param(0, common_1.Param('banID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserBanController.prototype, "deleteBanByID", null);
UserBanController = __decorate([
    common_1.Controller('user/bans'),
    __metadata("design:paramtypes", [user_1.UserRepository,
        user_1.UserBanRepository])
], UserBanController);
exports.UserBanController = UserBanController;
