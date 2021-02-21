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
exports.BetaModeGuard = void 0;
const config_1 = require("../database/config");
const beta_code_1 = require("../database/beta-code");
const rank_types_1 = require("../database/rank/rank.types");
const common_1 = require("@nestjs/common");
let BetaModeGuard = class BetaModeGuard {
    constructor(configRepo, betaCodeRepo) {
        this.configRepo = configRepo;
        this.betaCodeRepo = betaCodeRepo;
    }
    canActivate(context) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const config = yield this.configRepo.getConfig();
            if (!config.siteBeta) {
                return true;
            }
            const request = context.switchToHttp().getRequest();
            if (((_b = (_a = request.user) === null || _a === void 0 ? void 0 : _a.rank) === null || _b === void 0 ? void 0 : _b.websiteShowAdminPanel) === rank_types_1.PermissionStatus.Enabled) {
                return true;
            }
            const betaCode = ((_c = request.user) === null || _c === void 0 ? void 0 : _c.betaCode) ? yield this.betaCodeRepo.findOne({
                betaCode: request.user.betaCode.betaCode,
            })
                : undefined;
            return !!betaCode;
        });
    }
};
BetaModeGuard = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [config_1.ConfigRepository,
        beta_code_1.BetaCodeRepository])
], BetaModeGuard);
exports.BetaModeGuard = BetaModeGuard;
