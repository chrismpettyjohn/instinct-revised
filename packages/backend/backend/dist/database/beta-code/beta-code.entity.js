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
exports.BetaCodeEntity = void 0;
const user_entity_1 = require("../user/user/user.entity");
const typeorm_1 = require("typeorm");
let BetaCodeEntity = class BetaCodeEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], BetaCodeEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ name: 'beta_code', type: 'varchar', length: '100' }),
    __metadata("design:type", String)
], BetaCodeEntity.prototype, "betaCode", void 0);
__decorate([
    typeorm_1.Column({ name: 'user_id' }),
    __metadata("design:type", Number)
], BetaCodeEntity.prototype, "userID", void 0);
__decorate([
    typeorm_1.ManyToOne(() => user_entity_1.UserEntity),
    typeorm_1.JoinColumn({ name: 'user_id' }),
    __metadata("design:type", user_entity_1.UserEntity)
], BetaCodeEntity.prototype, "user", void 0);
BetaCodeEntity = __decorate([
    typeorm_1.Entity('instinct_beta_codes'),
    typeorm_1.Unique(['betaCode'])
], BetaCodeEntity);
exports.BetaCodeEntity = BetaCodeEntity;
