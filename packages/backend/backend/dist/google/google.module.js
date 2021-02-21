"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleModule = void 0;
const common_1 = require("@nestjs/common");
const database_1 = require("../database");
const recaptcha_service_1 = require("./recaptcha.service");
const recaptcha_constraint_1 = require("./recaptcha.constraint");
let GoogleModule = class GoogleModule {
};
GoogleModule = __decorate([
    common_1.Module({
        imports: [database_1.DatabaseModule],
        providers: [recaptcha_service_1.GoogleRecaptchaService, recaptcha_constraint_1.RecaptchaConstraint],
        exports: [recaptcha_service_1.GoogleRecaptchaService, recaptcha_constraint_1.RecaptchaConstraint],
    })
], GoogleModule);
exports.GoogleModule = GoogleModule;
