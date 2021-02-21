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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForgotPasswordService = void 0;
const moment_1 = __importDefault(require("moment"));
const common_1 = require("../../common");
const crypto_random_string_1 = __importDefault(require("crypto-random-string"));
const email_service_1 = require("../../email/email.service");
const config_1 = require("../../database/config");
const common_2 = require("@nestjs/common");
const user_1 = require("../../database/user");
const user_2 = require("../../database/user");
let ForgotPasswordService = class ForgotPasswordService {
    constructor(userRepo, configRepo, hashService, emailService, forgotPasswordRepo) {
        this.userRepo = userRepo;
        this.configRepo = configRepo;
        this.hashService = hashService;
        this.emailService = emailService;
        this.forgotPasswordRepo = forgotPasswordRepo;
    }
    generatePasswordKey(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = yield this.configRepo.getConfig();
            const user = yield this.userRepo.findOneOrFail({
                email,
            });
            if (user === undefined) {
                throw new common_2.BadRequestException('User does not exist');
            }
            const token = crypto_random_string_1.default({ length: 50, type: 'url-safe' });
            const expiration = moment_1.default().add('4', 'hours').unix();
            yield this.forgotPasswordRepo.create({
                userID: user.id,
                token,
                createdAt: moment_1.default().unix(),
                expiresAt: expiration,
            });
            yield this.emailService.sendEmail(user.email, config.sendGridForgotPasswordTemplate, {
                username: user.username,
                reset_link: `${config.siteLink}/forgot-password?token=${token}`,
            });
        });
    }
    redeemPasswordToken(token, newPassword) {
        return __awaiter(this, void 0, void 0, function* () {
            const forgotPasswordEntity = yield this.forgotPasswordRepo.findOneOrFail({
                token,
            });
            const currentTimestamp = +new Date() / 1000;
            if (forgotPasswordEntity.expiresAt <= currentTimestamp) {
                throw new common_2.BadRequestException('Reset link has expired');
            }
            yield this.userRepo.update({ id: forgotPasswordEntity.userID }, {
                password: this.hashService.generate(newPassword),
            });
            yield this.forgotPasswordRepo.delete({ token });
        });
    }
};
ForgotPasswordService = __decorate([
    common_2.Injectable(),
    __metadata("design:paramtypes", [user_1.UserRepository,
        config_1.ConfigRepository,
        common_1.HashService,
        email_service_1.EmailService,
        user_2.UserForgotPasswordRepository])
], ForgotPasswordService);
exports.ForgotPasswordService = ForgotPasswordService;
