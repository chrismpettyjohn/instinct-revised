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
exports.ValidRecaptcha = exports.RecaptchaConstraint = void 0;
const common_1 = require("@nestjs/common");
const recaptcha_service_1 = require("./recaptcha.service");
const class_validator_1 = require("class-validator");
let RecaptchaConstraint = class RecaptchaConstraint {
    constructor(recaptchaService) {
        this.recaptchaService = recaptchaService;
    }
    validate(token) {
        return this.recaptchaService.passedVerification(token);
    }
    defaultMessage() {
        return 'Invalid recaptcha code';
    }
};
RecaptchaConstraint = __decorate([
    class_validator_1.ValidatorConstraint({ async: true }),
    common_1.Injectable(),
    __metadata("design:paramtypes", [recaptcha_service_1.GoogleRecaptchaService])
], RecaptchaConstraint);
exports.RecaptchaConstraint = RecaptchaConstraint;
function ValidRecaptcha(validationOptions) {
    return function (object, propertyName) {
        class_validator_1.registerDecorator({
            target: object.constructor,
            propertyName,
            options: validationOptions,
            constraints: [],
            validator: RecaptchaConstraint,
        });
    };
}
exports.ValidRecaptcha = ValidRecaptcha;
