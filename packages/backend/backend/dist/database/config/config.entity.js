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
exports.ConfigEntity = void 0;
const typeorm_1 = require("typeorm");
let ConfigEntity = class ConfigEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], ConfigEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ name: 'site_name' }),
    __metadata("design:type", String)
], ConfigEntity.prototype, "siteName", void 0);
__decorate([
    typeorm_1.Column({ name: 'site_link' }),
    __metadata("design:type", String)
], ConfigEntity.prototype, "siteLink", void 0);
__decorate([
    typeorm_1.Column({ name: 'site_beta', type: 'tinyint' }),
    __metadata("design:type", Number)
], ConfigEntity.prototype, "siteBeta", void 0);
__decorate([
    typeorm_1.Column({ name: 'emulator_ip' }),
    __metadata("design:type", String)
], ConfigEntity.prototype, "emulatorIP", void 0);
__decorate([
    typeorm_1.Column({ name: 'emulator_port' }),
    __metadata("design:type", String)
], ConfigEntity.prototype, "emulatorPort", void 0);
__decorate([
    typeorm_1.Column({ name: 'swf_admin_habbo' }),
    __metadata("design:type", String)
], ConfigEntity.prototype, "swfAdminHabbo", void 0);
__decorate([
    typeorm_1.Column({ name: 'swf_habbo' }),
    __metadata("design:type", String)
], ConfigEntity.prototype, "swfHabbo", void 0);
__decorate([
    typeorm_1.Column({ name: 'swf_external_variables' }),
    __metadata("design:type", String)
], ConfigEntity.prototype, "swfExternalVariables", void 0);
__decorate([
    typeorm_1.Column({ name: 'swf_external_texts' }),
    __metadata("design:type", String)
], ConfigEntity.prototype, "swfExternalTexts", void 0);
__decorate([
    typeorm_1.Column({ name: 'swf_productdata' }),
    __metadata("design:type", String)
], ConfigEntity.prototype, "swfProductData", void 0);
__decorate([
    typeorm_1.Column({ name: 'swf_furnidata' }),
    __metadata("design:type", String)
], ConfigEntity.prototype, "swfFurniData", void 0);
__decorate([
    typeorm_1.Column({ name: 'swf_figuredata' }),
    __metadata("design:type", String)
], ConfigEntity.prototype, "swfFigureData", void 0);
__decorate([
    typeorm_1.Column({ name: 'swf_base_url' }),
    __metadata("design:type", String)
], ConfigEntity.prototype, "swfBaseURL", void 0);
__decorate([
    typeorm_1.Column({ name: 'swf_badge_url' }),
    __metadata("design:type", String)
], ConfigEntity.prototype, "swfBadgeURL", void 0);
__decorate([
    typeorm_1.Column({ name: 'swf_override_variables' }),
    __metadata("design:type", String)
], ConfigEntity.prototype, "swfOverrideVariables", void 0);
__decorate([
    typeorm_1.Column({ name: 'swf_override_texts' }),
    __metadata("design:type", String)
], ConfigEntity.prototype, "swfOverrideTexts", void 0);
__decorate([
    typeorm_1.Column({ name: 'loading_message' }),
    __metadata("design:type", String)
], ConfigEntity.prototype, "loadingMessage", void 0);
__decorate([
    typeorm_1.Column({ name: 'group_badge_url' }),
    __metadata("design:type", String)
], ConfigEntity.prototype, "groupBadgeURL", void 0);
__decorate([
    typeorm_1.Column({ name: 'sendgrid_api_key' }),
    __metadata("design:type", String)
], ConfigEntity.prototype, "sendGridAPIKey", void 0);
__decorate([
    typeorm_1.Column({ name: 'sendgrid_api_sender' }),
    __metadata("design:type", String)
], ConfigEntity.prototype, "sendGridAPISender", void 0);
__decorate([
    typeorm_1.Column({ name: 'sendgrid_template_forgot_password' }),
    __metadata("design:type", String)
], ConfigEntity.prototype, "sendGridForgotPasswordTemplate", void 0);
__decorate([
    typeorm_1.Column({ name: 'google_recaptcha_site_key' }),
    __metadata("design:type", String)
], ConfigEntity.prototype, "googleRecaptchaClientKey", void 0);
__decorate([
    typeorm_1.Column({ name: 'google_recaptcha_secret_key' }),
    __metadata("design:type", String)
], ConfigEntity.prototype, "googleRecaptchaSecretKey", void 0);
__decorate([
    typeorm_1.Column({ name: 'websocket_enabled', type: 'tinyint' }),
    __metadata("design:type", Number)
], ConfigEntity.prototype, "websocketEnabled", void 0);
__decorate([
    typeorm_1.Column({ name: 'websocket_ip' }),
    __metadata("design:type", String)
], ConfigEntity.prototype, "websocketIP", void 0);
__decorate([
    typeorm_1.Column({ name: 'websocket_port' }),
    __metadata("design:type", String)
], ConfigEntity.prototype, "websocketPort", void 0);
ConfigEntity = __decorate([
    typeorm_1.Entity('instinct_config')
], ConfigEntity);
exports.ConfigEntity = ConfigEntity;
