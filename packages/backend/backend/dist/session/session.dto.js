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
exports.UpdateEmailDTO = exports.UpdatePasswordDTO = exports.UpdatePreferencesDTO = exports.NewSessionDTO = void 0;
const user_exists_1 = require("../user/constraint/user-exists");
const unique_email_1 = require("../user/constraint/unique-email");
const class_validator_1 = require("class-validator");
class NewSessionDTO {
}
__decorate([
    class_validator_1.IsString(),
    user_exists_1.UserExists(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], NewSessionDTO.prototype, "username", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], NewSessionDTO.prototype, "password", void 0);
exports.NewSessionDTO = NewSessionDTO;
class UpdatePreferencesDTO {
}
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], UpdatePreferencesDTO.prototype, "favoriteYoutubeVideo", void 0);
exports.UpdatePreferencesDTO = UpdatePreferencesDTO;
class UpdatePasswordDTO {
}
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], UpdatePasswordDTO.prototype, "oldPassword", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], UpdatePasswordDTO.prototype, "newPassword", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], UpdatePasswordDTO.prototype, "newPasswordAgain", void 0);
exports.UpdatePasswordDTO = UpdatePasswordDTO;
class UpdateEmailDTO {
}
__decorate([
    class_validator_1.IsEmail(),
    unique_email_1.UniqueEmail(),
    __metadata("design:type", String)
], UpdateEmailDTO.prototype, "email", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], UpdateEmailDTO.prototype, "password", void 0);
exports.UpdateEmailDTO = UpdateEmailDTO;
