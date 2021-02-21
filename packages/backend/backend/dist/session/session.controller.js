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
exports.SessionController = void 0;
const common_1 = require("../common");
const session_service_1 = require("./session.service");
const has_session_decorator_1 = require("./has-session.decorator");
const get_session_decorator_1 = require("./get-session.decorator");
const user_1 = require("../database/user");
const common_2 = require("@nestjs/common");
const session_dto_1 = require("./session.dto");
let SessionController = class SessionController {
    constructor(userRepo, sessionService, hashService) {
        this.userRepo = userRepo;
        this.sessionService = sessionService;
        this.hashService = hashService;
    }
    createSession(newSession) {
        return this.sessionService.loginWithCredentials(newSession.username, newSession.password);
    }
    createSSO(session) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.userRepo.createSSO(session.id);
        });
    }
    changePreferences(session, preferencesDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.userRepo.update({ id: session.id }, {
                favoriteYoutubeVideo: preferencesDTO.favoriteYoutubeVideo,
            });
            return 'Your preferences have been updated';
        });
    }
    changeEmail(session, emailDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            const samePassword = yield this.hashService.compare(emailDTO.password, session.password);
            if (!samePassword) {
                throw new common_2.BadRequestException('That is not the right password');
            }
            yield this.userRepo.update({ id: session.id }, { email: emailDTO.email });
            return 'Your email has been updated';
        });
    }
    changePassword(session, passwordDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            const samePassword = yield this.hashService.compare(passwordDTO.oldPassword, session.password);
            if (!samePassword) {
                throw new common_2.BadRequestException('That is not the right password');
            }
            if (passwordDTO.newPassword !== passwordDTO.newPasswordAgain) {
                throw new common_2.BadRequestException('Your passwords must match');
            }
            yield this.userRepo.update({ id: session.id }, {
                password: this.hashService.generate(passwordDTO.newPassword),
            });
            return 'Your password has been updated';
        });
    }
    getSession(session) {
        return user_1.userWire(session);
    }
};
__decorate([
    common_2.Post(),
    __param(0, common_2.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [session_dto_1.NewSessionDTO]),
    __metadata("design:returntype", Promise)
], SessionController.prototype, "createSession", null);
__decorate([
    common_2.Post('sso'),
    has_session_decorator_1.HasSession(),
    __param(0, get_session_decorator_1.GetSession()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_1.UserEntity]),
    __metadata("design:returntype", Promise)
], SessionController.prototype, "createSSO", null);
__decorate([
    common_2.Post('settings/preferences'),
    has_session_decorator_1.HasSession(),
    __param(0, get_session_decorator_1.GetSession()),
    __param(1, common_2.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_1.UserEntity,
        session_dto_1.UpdatePreferencesDTO]),
    __metadata("design:returntype", Promise)
], SessionController.prototype, "changePreferences", null);
__decorate([
    common_2.Post('settings/email'),
    has_session_decorator_1.HasSession(),
    __param(0, get_session_decorator_1.GetSession()),
    __param(1, common_2.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_1.UserEntity,
        session_dto_1.UpdateEmailDTO]),
    __metadata("design:returntype", Promise)
], SessionController.prototype, "changeEmail", null);
__decorate([
    common_2.Post('settings/password'),
    has_session_decorator_1.HasSession(),
    __param(0, get_session_decorator_1.GetSession()),
    __param(1, common_2.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_1.UserEntity,
        session_dto_1.UpdatePasswordDTO]),
    __metadata("design:returntype", Promise)
], SessionController.prototype, "changePassword", null);
__decorate([
    common_2.Get(),
    has_session_decorator_1.HasSession(),
    __param(0, get_session_decorator_1.GetSession()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_1.UserEntity]),
    __metadata("design:returntype", Object)
], SessionController.prototype, "getSession", null);
SessionController = __decorate([
    common_2.Controller('session'),
    __metadata("design:paramtypes", [user_1.UserRepository,
        session_service_1.SessionService,
        common_1.HashService])
], SessionController);
exports.SessionController = SessionController;
