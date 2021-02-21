"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountBannedGuard = void 0;
const common_1 = require("@nestjs/common");
let AccountBannedGuard = class AccountBannedGuard {
    canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const timestamp = +new Date() / 1000;
        const activeBans = request.user.bans.filter(ban => ban.banExpirationTimestamp > timestamp);
        if (activeBans.length > 0) {
            throw new common_1.ForbiddenException('You are banned');
        }
        return activeBans.length === 0;
    }
};
AccountBannedGuard = __decorate([
    common_1.Injectable()
], AccountBannedGuard);
exports.AccountBannedGuard = AccountBannedGuard;
