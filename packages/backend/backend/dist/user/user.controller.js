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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const moment_1 = __importDefault(require("moment"));
const user_pipe_1 = require("./user.pipe");
const user_dto_1 = require("./user.dto");
const config_1 = require("../database/config");
const environment_1 = require("../config/environment");
const beta_code_1 = require("../database/beta-code");
const database_1 = require("../database");
const common_1 = require("@nestjs/common");
const common_2 = require("../common");
let UserController = class UserController {
    constructor(configRepo, userRepo, betaCodeRepo) {
        this.configRepo = configRepo;
        this.userRepo = userRepo;
        this.betaCodeRepo = betaCodeRepo;
    }
    getOnlineUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            const onlineUsers = yield this.userRepo.find({ online: '1' });
            return onlineUsers.map(_ => database_1.userWire(_));
        });
    }
    getUserOfTheWeek() {
        return __awaiter(this, void 0, void 0, function* () {
            const usersOfTheWeek = yield this.userRepo.find({ userOfTheWeek: 1 });
            return usersOfTheWeek.map(_ => database_1.userWire(_));
        });
    }
    createUser(newUser, ipAddress) {
        return __awaiter(this, void 0, void 0, function* () {
            const alreadyRegistered = yield this.userRepo.find({ ipCurrent: ipAddress });
            if (alreadyRegistered.length >= environment_1.maxAccountsPerIP) {
                throw new common_1.ForbiddenException('Too many accounts');
            }
            const currentTimestamp = moment_1.default().unix();
            const user = yield this.userRepo.create({
                username: newUser.username,
                motto: common_2.defaultUserMotto,
                password: newUser.password,
                rankID: common_2.defaultUserRank,
                email: newUser.email.toLowerCase(),
                mailVerified: 0,
                accountCreated: currentTimestamp,
                accountDayOfBirth: 0,
                lastLogin: currentTimestamp,
                lastOnline: currentTimestamp,
                gender: 'M',
                figure: common_2.defaultUserLook,
                credits: common_2.defaultUserCredits,
                pixels: common_2.defaultUserPixels,
                points: common_2.defaultUserPoints,
                online: '0',
                ipRegister: ipAddress,
                ipCurrent: ipAddress,
                homeRoom: common_2.defaultUserHomeRoom,
                favoriteYoutubeVideo: 'GfxcnX7XWfg',
                userOfTheWeek: 0,
            });
            const config = yield this.configRepo.getConfig();
            if (config.siteBeta) {
                yield this.betaCodeRepo.update({ betaCode: newUser.betaCode }, { userID: user.id });
            }
            return database_1.userWire(user);
        });
    }
    getUserByID(user) {
        return database_1.userWire(user);
    }
    getRoomsByUserID(user) {
        return __awaiter(this, void 0, void 0, function* () {
            return user.rooms.map(room => database_1.roomWire(room));
        });
    }
    getUserByUsername(username) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userRepo.findOne({
                username,
            });
            if (!user) {
                throw new common_1.NotFoundException('User does not exist');
            }
            return {
                user: database_1.userWire(user),
                rooms: user.rooms.map(room => database_1.roomWire(room)),
                badges: user.badges.map(badge => database_1.badgeWire(badge)),
                friends: user.friends.map(user => database_1.userWire(user)),
                groups: user.joinedGroups.map(group => database_1.groupWire(group)),
            };
        });
    }
};
__decorate([
    common_1.Get('online'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getOnlineUsers", null);
__decorate([
    common_1.Get('user-of-the-week'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUserOfTheWeek", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __param(1, common_1.Ip()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.UserDTOClass, String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "createUser", null);
__decorate([
    common_1.Get(':userID'),
    __param(0, common_1.Param('userID', user_pipe_1.UserPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [database_1.UserEntity]),
    __metadata("design:returntype", Object)
], UserController.prototype, "getUserByID", null);
__decorate([
    common_1.Get(':userID/rooms'),
    __param(0, common_1.Param('userID', user_pipe_1.UserPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [database_1.UserEntity]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getRoomsByUserID", null);
__decorate([
    common_1.Get('profile/:username'),
    __param(0, common_1.Param('username')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUserByUsername", null);
UserController = __decorate([
    common_1.Controller('users'),
    __metadata("design:paramtypes", [config_1.ConfigRepository,
        database_1.UserRepository,
        beta_code_1.BetaCodeRepository])
], UserController);
exports.UserController = UserController;
