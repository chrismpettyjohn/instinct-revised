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
exports.RankDTOClass = void 0;
const class_validator_1 = require("class-validator");
class RankDTOClass {
}
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], RankDTOClass.prototype, "name", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], RankDTOClass.prototype, "badge", void 0);
__decorate([
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], RankDTOClass.prototype, "level", void 0);
__decorate([
    class_validator_1.IsNumber({}, { each: true }),
    __metadata("design:type", Array)
], RankDTOClass.prototype, "users", void 0);
__decorate([
    class_validator_1.IsBoolean(),
    __metadata("design:type", Boolean)
], RankDTOClass.prototype, "websiteAdminClient", void 0);
__decorate([
    class_validator_1.IsBoolean(),
    __metadata("design:type", Boolean)
], RankDTOClass.prototype, "websiteShowStaff", void 0);
__decorate([
    class_validator_1.IsBoolean(),
    __metadata("design:type", Boolean)
], RankDTOClass.prototype, "websiteShowAdminPanel", void 0);
__decorate([
    class_validator_1.IsBoolean(),
    __metadata("design:type", Boolean)
], RankDTOClass.prototype, "websiteManageNews", void 0);
__decorate([
    class_validator_1.IsBoolean(),
    __metadata("design:type", Boolean)
], RankDTOClass.prototype, "websiteManageRanks", void 0);
__decorate([
    class_validator_1.IsBoolean(),
    __metadata("design:type", Boolean)
], RankDTOClass.prototype, "websiteManageUsers", void 0);
__decorate([
    class_validator_1.IsBoolean(),
    __metadata("design:type", Boolean)
], RankDTOClass.prototype, "websiteManageBans", void 0);
__decorate([
    class_validator_1.IsBoolean(),
    __metadata("design:type", Boolean)
], RankDTOClass.prototype, "websiteManageConfig", void 0);
__decorate([
    class_validator_1.IsBoolean(),
    __metadata("design:type", Boolean)
], RankDTOClass.prototype, "websiteManageBetaCodes", void 0);
__decorate([
    class_validator_1.IsBoolean(),
    __metadata("design:type", Boolean)
], RankDTOClass.prototype, "websiteManageGuestbook", void 0);
__decorate([
    class_validator_1.IsBoolean(),
    __metadata("design:type", Boolean)
], RankDTOClass.prototype, "websiteManageEmulator", void 0);
exports.RankDTOClass = RankDTOClass;
