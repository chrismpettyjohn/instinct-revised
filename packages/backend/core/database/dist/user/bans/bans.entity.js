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
exports.UserBanEntity = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../user/user.entity");
let UserBanEntity = class UserBanEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], UserBanEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ name: 'user_id', type: 'int4' }),
    __metadata("design:type", Number)
], UserBanEntity.prototype, "userID", void 0);
__decorate([
    typeorm_1.ManyToOne(() => user_entity_1.UserEntity),
    typeorm_1.JoinColumn({ name: 'user_id' }),
    __metadata("design:type", user_entity_1.UserEntity)
], UserBanEntity.prototype, "user", void 0);
__decorate([
    typeorm_1.Column({ name: 'ip' }),
    __metadata("design:type", String)
], UserBanEntity.prototype, "ipAddress", void 0);
__decorate([
    typeorm_1.Column({ name: 'ban_reason' }),
    __metadata("design:type", String)
], UserBanEntity.prototype, "banReason", void 0);
__decorate([
    typeorm_1.Column({ name: 'machine_id' }),
    __metadata("design:type", String)
], UserBanEntity.prototype, "machineID", void 0);
__decorate([
    typeorm_1.Column({ name: 'user_staff_id', type: 'int4' }),
    __metadata("design:type", Number)
], UserBanEntity.prototype, "staffID", void 0);
__decorate([
    typeorm_1.ManyToOne(() => user_entity_1.UserEntity),
    typeorm_1.JoinColumn({ name: 'user_staff_id' }),
    __metadata("design:type", user_entity_1.UserEntity)
], UserBanEntity.prototype, "staffMember", void 0);
__decorate([
    typeorm_1.Column({ name: 'timestamp', type: 'timestamp' }),
    __metadata("design:type", Number)
], UserBanEntity.prototype, "banStartedTimestamp", void 0);
__decorate([
    typeorm_1.Column({ name: 'ban_expire', type: 'timestamp' }),
    __metadata("design:type", Number)
], UserBanEntity.prototype, "banExpirationTimestamp", void 0);
UserBanEntity = __decorate([
    typeorm_1.Entity('bans')
], UserBanEntity);
exports.UserBanEntity = UserBanEntity;
