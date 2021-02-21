"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeatureModule = void 0;
const common_1 = require("@nestjs/common");
const manage_users_1 = require("./manage-users");
const forgot_password_1 = require("./forgot-password");
const user_guestbook_module_1 = require("./user-guestbook/user-guestbook.module");
let FeatureModule = class FeatureModule {
};
FeatureModule = __decorate([
    common_1.Module({
        imports: [forgot_password_1.ForgotPasswordModule, manage_users_1.ManageUsersModule, user_guestbook_module_1.UserGuestbookModule],
        exports: [forgot_password_1.ForgotPasswordModule, manage_users_1.ManageUsersModule, user_guestbook_module_1.UserGuestbookModule],
    })
], FeatureModule);
exports.FeatureModule = FeatureModule;
