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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionModule = void 0;
const user_1 = require("../user");
const jwt_1 = require("@nestjs/jwt");
const common_1 = require("@nestjs/common");
const database_1 = require("../database");
const beta_code_1 = require("../beta-code");
const passport_1 = require("@nestjs/passport");
const session_service_1 = require("./session.service");
const session_controller_1 = require("./session.controller");
const account_ban_guard_1 = require("./account-ban.guard");
const bearer_token_service_1 = require("./bearer-token.service");
const bearer_token_strategy_1 = require("./bearer-token.strategy");
const common_2 = require("../common");
let SessionModule = class SessionModule {
    constructor() {
        passport_1.PassportModule.register({
            session: true,
        });
    }
};
SessionModule = __decorate([
    common_1.Module({
        imports: [
            user_1.UserModule,
            common_2.CommonModule,
            database_1.DatabaseModule,
            beta_code_1.BetaCodeModule,
            passport_1.PassportModule,
            jwt_1.JwtModule.register({
                secret: common_2.jwtSecret,
                signOptions: {
                    expiresIn: common_2.jwtExpires,
                },
            }),
        ],
        controllers: [session_controller_1.SessionController],
        providers: [
            session_service_1.SessionService,
            bearer_token_service_1.BearerTokenService,
            bearer_token_strategy_1.BearerTokenStrategy,
            account_ban_guard_1.AccountBannedGuard,
        ],
        exports: [
            session_service_1.SessionService,
            bearer_token_service_1.BearerTokenService,
            bearer_token_strategy_1.BearerTokenStrategy,
            account_ban_guard_1.AccountBannedGuard,
        ],
    }),
    __metadata("design:paramtypes", [])
], SessionModule);
exports.SessionModule = SessionModule;
