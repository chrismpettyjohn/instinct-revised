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
exports.InternalUserDTO = void 0;
const rank_constraint_1 = require("../../rank/rank.constraint");
const class_validator_1 = require("class-validator");
class InternalUserDTO {
}
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], InternalUserDTO.prototype, "username", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], InternalUserDTO.prototype, "password", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], InternalUserDTO.prototype, "email", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], InternalUserDTO.prototype, "motto", void 0);
__decorate([
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], InternalUserDTO.prototype, "credits", void 0);
__decorate([
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], InternalUserDTO.prototype, "pixels", void 0);
__decorate([
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], InternalUserDTO.prototype, "points", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], InternalUserDTO.prototype, "figure", void 0);
__decorate([
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], InternalUserDTO.prototype, "userOfTheWeek", void 0);
__decorate([
    class_validator_1.IsNumber(),
    rank_constraint_1.ExistingRank(),
    __metadata("design:type", Number)
], InternalUserDTO.prototype, "rankID", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], InternalUserDTO.prototype, "favoriteYoutubeVideo", void 0);
__decorate([
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], InternalUserDTO.prototype, "homeRoom", void 0);
exports.InternalUserDTO = InternalUserDTO;
