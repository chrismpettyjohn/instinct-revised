"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HasSession = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const account_ban_guard_1 = require("./account-ban.guard");
const beta_code_guard_1 = require("../beta-code/beta-code.guard");
function HasSession() {
    return common_1.UseGuards(passport_1.AuthGuard('bearer-token'), account_ban_guard_1.AccountBannedGuard, beta_code_guard_1.BetaModeGuard);
}
exports.HasSession = HasSession;
