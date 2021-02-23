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
exports.GroupEntity = void 0;
const user_entity_1 = require("../user/user/user.entity");
const room_entity_1 = require("../room/room.entity");
const typeorm_1 = require("typeorm");
let GroupEntity = class GroupEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], GroupEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ name: 'user_id', type: 'int' }),
    __metadata("design:type", Number)
], GroupEntity.prototype, "userID", void 0);
__decorate([
    typeorm_1.ManyToOne(() => user_entity_1.UserEntity),
    typeorm_1.JoinColumn({ name: 'user_id' }),
    __metadata("design:type", user_entity_1.UserEntity)
], GroupEntity.prototype, "user", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], GroupEntity.prototype, "name", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', length: 250 }),
    __metadata("design:type", String)
], GroupEntity.prototype, "description", void 0);
__decorate([
    typeorm_1.Column({ name: 'room_id', type: 'int' }),
    __metadata("design:type", Number)
], GroupEntity.prototype, "roomID", void 0);
__decorate([
    typeorm_1.ManyToOne(() => room_entity_1.RoomEntity),
    typeorm_1.JoinColumn({ name: 'room_id' }),
    __metadata("design:type", room_entity_1.RoomEntity)
], GroupEntity.prototype, "room", void 0);
__decorate([
    typeorm_1.Column({ type: 'int' }),
    __metadata("design:type", Number)
], GroupEntity.prototype, "state", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', length: 256 }),
    __metadata("design:type", String)
], GroupEntity.prototype, "badge", void 0);
__decorate([
    typeorm_1.Column({ name: 'date_created', type: 'int' }),
    __metadata("design:type", Number)
], GroupEntity.prototype, "dateCreated", void 0);
__decorate([
    typeorm_1.ManyToMany(() => user_entity_1.UserEntity, user => user.joinedGroups),
    typeorm_1.JoinTable({
        name: 'guilds_members',
        joinColumn: {
            name: 'guild_id',
        },
        inverseJoinColumn: {
            name: 'user_id',
        },
    }),
    __metadata("design:type", Array)
], GroupEntity.prototype, "members", void 0);
GroupEntity = __decorate([
    typeorm_1.Entity('guilds')
], GroupEntity);
exports.GroupEntity = GroupEntity;
