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
exports.PhotoEntity = exports.photoWire = void 0;
const user_wire_1 = require("../user/user/user.wire");
const user_entity_1 = require("../user/user/user.entity");
const typeorm_1 = require("typeorm");
function photoWire(photoEntity) {
    return {
        id: photoEntity.id,
        userID: photoEntity.userID,
        user: photoEntity.user ? user_wire_1.userWire(photoEntity.user) : undefined,
        roomID: photoEntity.roomID,
        imagePath: photoEntity.imagePath,
        createdAt: photoEntity.createdAt,
    };
}
exports.photoWire = photoWire;
let PhotoEntity = class PhotoEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], PhotoEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ name: 'user_id' }),
    __metadata("design:type", Number)
], PhotoEntity.prototype, "userID", void 0);
__decorate([
    typeorm_1.ManyToOne(() => user_entity_1.UserEntity),
    typeorm_1.JoinColumn({ name: 'user_id' }),
    __metadata("design:type", user_entity_1.UserEntity)
], PhotoEntity.prototype, "user", void 0);
__decorate([
    typeorm_1.Column({ name: 'room_id' }),
    __metadata("design:type", Number)
], PhotoEntity.prototype, "roomID", void 0);
__decorate([
    typeorm_1.Column({ name: 'url' }),
    __metadata("design:type", String)
], PhotoEntity.prototype, "imagePath", void 0);
__decorate([
    typeorm_1.Column({ name: 'timestamp' }),
    __metadata("design:type", Number)
], PhotoEntity.prototype, "createdAt", void 0);
PhotoEntity = __decorate([
    typeorm_1.Entity('camera_web')
], PhotoEntity);
exports.PhotoEntity = PhotoEntity;
