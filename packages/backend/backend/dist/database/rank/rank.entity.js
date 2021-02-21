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
exports.RankEntity = void 0;
const rank_types_1 = require("./rank.types");
const user_entity_1 = require("../user/user/user.entity");
const typeorm_1 = require("typeorm");
let RankEntity = class RankEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], RankEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ name: 'rank_name' }),
    __metadata("design:type", String)
], RankEntity.prototype, "name", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], RankEntity.prototype, "badge", void 0);
__decorate([
    typeorm_1.Column({ default: 1 }),
    __metadata("design:type", Number)
], RankEntity.prototype, "level", void 0);
__decorate([
    typeorm_1.OneToMany(() => user_entity_1.UserEntity, user => user.rank),
    __metadata("design:type", Array)
], RankEntity.prototype, "users", void 0);
__decorate([
    typeorm_1.Column({ name: 'website_admin_client', type: 'enum', default: '0' }),
    __metadata("design:type", String)
], RankEntity.prototype, "websiteAdminClient", void 0);
__decorate([
    typeorm_1.Column({ name: 'website_show_staff', type: 'enum', default: '0' }),
    __metadata("design:type", String)
], RankEntity.prototype, "websiteShowStaff", void 0);
__decorate([
    typeorm_1.Column({ name: 'website_show_admin_panel', type: 'enum', default: '0' }),
    __metadata("design:type", String)
], RankEntity.prototype, "websiteShowAdminPanel", void 0);
__decorate([
    typeorm_1.Column({ name: 'website_manage_news', type: 'enum', default: '0' }),
    __metadata("design:type", String)
], RankEntity.prototype, "websiteManageNews", void 0);
__decorate([
    typeorm_1.Column({ name: 'website_manage_ranks', type: 'enum', default: '0' }),
    __metadata("design:type", String)
], RankEntity.prototype, "websiteManageRanks", void 0);
__decorate([
    typeorm_1.Column({ name: 'website_manage_users', type: 'enum', default: '0' }),
    __metadata("design:type", String)
], RankEntity.prototype, "websiteManageUsers", void 0);
__decorate([
    typeorm_1.Column({ name: 'website_manage_bans', type: 'enum', default: '0' }),
    __metadata("design:type", String)
], RankEntity.prototype, "websiteManageBans", void 0);
__decorate([
    typeorm_1.Column({ name: 'website_manage_config', type: 'enum', default: '0' }),
    __metadata("design:type", String)
], RankEntity.prototype, "websiteManageConfig", void 0);
__decorate([
    typeorm_1.Column({ name: 'website_manage_beta_codes', type: 'enum', default: '0' }),
    __metadata("design:type", String)
], RankEntity.prototype, "websiteManageBetaCodes", void 0);
__decorate([
    typeorm_1.Column({ name: 'website_manage_guestbook', type: 'enum', default: '0' }),
    __metadata("design:type", String)
], RankEntity.prototype, "websiteManageGuestbook", void 0);
__decorate([
    typeorm_1.Column({ name: 'website_manage_emulator', type: 'enum', default: '0' }),
    __metadata("design:type", String)
], RankEntity.prototype, "websiteManageEmulator", void 0);
RankEntity = __decorate([
    typeorm_1.Entity('permissions')
], RankEntity);
exports.RankEntity = RankEntity;
