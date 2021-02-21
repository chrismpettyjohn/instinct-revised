"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForgotPasswordModule = void 0;
const common_1 = require("@nestjs/common");
const user_1 = require("../../user");
const common_2 = require("../../common");
const database_1 = require("../../database");
const email_module_1 = require("../../email/email.module");
const forgot_password_service_1 = require("./forgot-password.service");
const forgot_password_controller_1 = require("./forgot-password.controller");
let ForgotPasswordModule = class ForgotPasswordModule {
};
ForgotPasswordModule = __decorate([
    common_1.Module({
        imports: [database_1.DatabaseModule, user_1.UserModule, email_module_1.EmailModule, common_2.CommonModule],
        controllers: [forgot_password_controller_1.ForgotPasswordController],
        providers: [forgot_password_service_1.ForgotPasswordService],
    })
], ForgotPasswordModule);
exports.ForgotPasswordModule = ForgotPasswordModule;
