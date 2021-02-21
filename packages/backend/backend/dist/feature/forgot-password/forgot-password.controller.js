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
exports.ForgotPasswordController = void 0;
const forgot_password_dto_1 = require("./forgot-password.dto");
const forgot_password_service_1 = require("./forgot-password.service");
const common_1 = require("@nestjs/common");
let ForgotPasswordController = class ForgotPasswordController {
    constructor(forgotPasswordService) {
        this.forgotPasswordService = forgotPasswordService;
    }
    sendPasswordLink(email) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!email) {
                throw new common_1.BadRequestException('Email must be specified');
            }
            yield this.forgotPasswordService.generatePasswordKey(email);
            return 'A link to reset your password has been emailed to you.';
        });
    }
    redeemPasswordLink(forgotPasswordDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            if (forgotPasswordDTO.password !== forgotPasswordDTO.passwordAgain) {
                throw new common_1.BadRequestException('Your passwords must match');
            }
            yield this.forgotPasswordService.redeemPasswordToken(forgotPasswordDTO.token, forgotPasswordDTO.password);
            return 'Your password has been updated';
        });
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Query('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ForgotPasswordController.prototype, "sendPasswordLink", null);
__decorate([
    common_1.Post('redeem'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [forgot_password_dto_1.ForgotPasswordDTO]),
    __metadata("design:returntype", Promise)
], ForgotPasswordController.prototype, "redeemPasswordLink", null);
ForgotPasswordController = __decorate([
    common_1.Controller('session/forgot-password'),
    __metadata("design:paramtypes", [forgot_password_service_1.ForgotPasswordService])
], ForgotPasswordController);
exports.ForgotPasswordController = ForgotPasswordController;
