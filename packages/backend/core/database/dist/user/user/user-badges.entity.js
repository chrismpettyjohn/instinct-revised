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
exports.UserBadgesEntity = exports.badgeWire = void 0;
const user_entity_1 = require("./user.entity");
const typeorm_1 = require("typeorm");
function badgeWire(badge) {
    return {
        id: badge.id,
        code: badge.code,
    };
}
exports.badgeWire = badgeWire;
let UserBadgesEntity = class UserBadgesEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], UserBadgesEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ name: 'user_id' }),
    __metadata("design:type", Number)
], UserBadgesEntity.prototype, "userID", void 0);
__decorate([
    typeorm_1.ManyToOne(() => user_entity_1.UserEntity, user => user.badges),
    typeorm_1.JoinColumn({ name: 'user_id' }),
    __metadata("design:type", user_entity_1.UserEntity)
], UserBadgesEntity.prototype, "user", void 0);
__decorate([
    typeorm_1.Column({ name: 'slot_id', default: 0 }),
    __metadata("design:type", Number)
], UserBadgesEntity.prototype, "slotID", void 0);
__decorate([
    typeorm_1.Column({ name: 'badge_code' }),
    __metadata("design:type", String)
], UserBadgesEntity.prototype, "code", void 0);
UserBadgesEntity = __decorate([
    typeorm_1.Entity('users_badges')
], UserBadgesEntity);
exports.UserBadgesEntity = UserBadgesEntity;
