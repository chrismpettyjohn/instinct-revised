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
var UserEntity_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEntity = void 0;
const bans_entity_1 = require("../bans/bans.entity");
const rank_entity_1 = require("../../rank/rank.entity");
const room_entity_1 = require("../../room/room.entity");
const photo_entity_1 = require("../../photo/photo.entity");
const group_entity_1 = require("../../group/group.entity");
const user_badges_entity_1 = require("./user-badges.entity");
const beta_code_entity_1 = require("../../beta-code/beta-code.entity");
const typeorm_1 = require("typeorm");
let UserEntity = UserEntity_1 = class UserEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ name: 'id' }),
    __metadata("design:type", Number)
], UserEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ name: 'username', unique: true }),
    __metadata("design:type", String)
], UserEntity.prototype, "username", void 0);
__decorate([
    typeorm_1.Column({ name: 'real_name', nullable: true }),
    __metadata("design:type", String)
], UserEntity.prototype, "realName", void 0);
__decorate([
    typeorm_1.Column({ name: 'password' }),
    __metadata("design:type", String)
], UserEntity.prototype, "password", void 0);
__decorate([
    typeorm_1.Column({ name: 'mail' }),
    __metadata("design:type", String)
], UserEntity.prototype, "email", void 0);
__decorate([
    typeorm_1.Column({ name: 'mail_verified', select: false, default: 0 }),
    __metadata("design:type", Number)
], UserEntity.prototype, "mailVerified", void 0);
__decorate([
    typeorm_1.Column({ name: 'account_created' }),
    __metadata("design:type", Number)
], UserEntity.prototype, "accountCreated", void 0);
__decorate([
    typeorm_1.Column({ name: 'account_day_of_birth', default: 0 }),
    __metadata("design:type", Number)
], UserEntity.prototype, "accountDayOfBirth", void 0);
__decorate([
    typeorm_1.Column({ name: 'last_login' }),
    __metadata("design:type", Number)
], UserEntity.prototype, "lastLogin", void 0);
__decorate([
    typeorm_1.Column({ name: 'last_online', default: 0 }),
    __metadata("design:type", Number)
], UserEntity.prototype, "lastOnline", void 0);
__decorate([
    typeorm_1.Column({ name: 'motto', nullable: true, default: 'Nectar' }),
    __metadata("design:type", String)
], UserEntity.prototype, "motto", void 0);
__decorate([
    typeorm_1.Column({
        name: 'look',
        default: 'lg-270-82.hd-180-1.ch-210-66.sh-290-81.hr-100-40',
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "figure", void 0);
__decorate([
    typeorm_1.Column({ name: 'gender', type: 'enum', enum: ['M', 'F'], default: 'M' }),
    __metadata("design:type", String)
], UserEntity.prototype, "gender", void 0);
__decorate([
    typeorm_1.Column({ name: 'rank' }),
    __metadata("design:type", Number)
], UserEntity.prototype, "rankID", void 0);
__decorate([
    typeorm_1.ManyToOne(() => rank_entity_1.RankEntity),
    typeorm_1.JoinColumn({ name: 'rank' }),
    __metadata("design:type", rank_entity_1.RankEntity)
], UserEntity.prototype, "rank", void 0);
__decorate([
    typeorm_1.Column({ name: 'credits' }),
    __metadata("design:type", Number)
], UserEntity.prototype, "credits", void 0);
__decorate([
    typeorm_1.Column({ name: 'pixels' }),
    __metadata("design:type", Number)
], UserEntity.prototype, "pixels", void 0);
__decorate([
    typeorm_1.Column({ name: 'points' }),
    __metadata("design:type", Number)
], UserEntity.prototype, "points", void 0);
__decorate([
    typeorm_1.Column({ name: 'online', type: 'enum', enum: ['0', '1', '2'], default: '0' }),
    __metadata("design:type", String)
], UserEntity.prototype, "online", void 0);
__decorate([
    typeorm_1.Column({ name: 'auth_ticket', nullable: true }),
    __metadata("design:type", String)
], UserEntity.prototype, "authTicket", void 0);
__decorate([
    typeorm_1.Column({ name: 'ip_register', default: '127.0.0.1' }),
    __metadata("design:type", String)
], UserEntity.prototype, "ipRegister", void 0);
__decorate([
    typeorm_1.Column({ name: 'ip_current', default: '127.0.0.1' }),
    __metadata("design:type", String)
], UserEntity.prototype, "ipCurrent", void 0);
__decorate([
    typeorm_1.Column({ name: 'machine_id', nullable: true }),
    __metadata("design:type", String)
], UserEntity.prototype, "machineID", void 0);
__decorate([
    typeorm_1.Column({ name: 'home_room', default: 0 }),
    __metadata("design:type", Number)
], UserEntity.prototype, "homeRoom", void 0);
__decorate([
    typeorm_1.Column({ name: 'youtube_video' }),
    __metadata("design:type", String)
], UserEntity.prototype, "favoriteYoutubeVideo", void 0);
__decorate([
    typeorm_1.Column({ name: 'user_of_the_week', type: 'tinyint' }),
    __metadata("design:type", Number)
], UserEntity.prototype, "userOfTheWeek", void 0);
__decorate([
    typeorm_1.OneToMany(() => photo_entity_1.PhotoEntity, photo => photo.user),
    __metadata("design:type", Array)
], UserEntity.prototype, "photos", void 0);
__decorate([
    typeorm_1.OneToMany(() => room_entity_1.RoomEntity, room => room.owner),
    __metadata("design:type", Array)
], UserEntity.prototype, "rooms", void 0);
__decorate([
    typeorm_1.OneToMany(() => user_badges_entity_1.UserBadgesEntity, badge => badge.user),
    __metadata("design:type", Array)
], UserEntity.prototype, "badges", void 0);
__decorate([
    typeorm_1.ManyToMany(() => UserEntity_1),
    typeorm_1.JoinTable({
        name: 'messenger_friendships',
        joinColumn: {
            name: 'user_one_id',
            referencedColumnName: 'id',
        },
        inverseJoinColumn: {
            name: 'user_two_id',
            referencedColumnName: 'id',
        },
    }),
    __metadata("design:type", Array)
], UserEntity.prototype, "friends", void 0);
__decorate([
    typeorm_1.OneToMany(() => group_entity_1.GroupEntity, group => group.user),
    __metadata("design:type", Array)
], UserEntity.prototype, "groups", void 0);
__decorate([
    typeorm_1.ManyToMany(() => group_entity_1.GroupEntity, group => group.members),
    __metadata("design:type", Array)
], UserEntity.prototype, "joinedGroups", void 0);
__decorate([
    typeorm_1.OneToMany(() => bans_entity_1.UserBanEntity, ban => ban.user),
    __metadata("design:type", Array)
], UserEntity.prototype, "bans", void 0);
__decorate([
    typeorm_1.OneToOne(() => beta_code_entity_1.BetaCodeEntity, betaCode => betaCode.user),
    __metadata("design:type", beta_code_entity_1.BetaCodeEntity)
], UserEntity.prototype, "betaCode", void 0);
UserEntity = UserEntity_1 = __decorate([
    typeorm_1.Entity('users')
], UserEntity);
exports.UserEntity = UserEntity;
