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
exports.ArticleEntity = void 0;
const user_entity_1 = require("../user/user/user.entity");
const article_category_entity_1 = require("./article-category.entity");
const typeorm_1 = require("typeorm");
let ArticleEntity = class ArticleEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], ArticleEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ArticleEntity.prototype, "title", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ArticleEntity.prototype, "description", void 0);
__decorate([
    typeorm_1.Column({ type: 'text' }),
    __metadata("design:type", String)
], ArticleEntity.prototype, "content", void 0);
__decorate([
    typeorm_1.Column({ name: 'category_id' }),
    __metadata("design:type", Number)
], ArticleEntity.prototype, "categoryID", void 0);
__decorate([
    typeorm_1.ManyToOne(() => article_category_entity_1.ArticleCategoryEntity, category => category.articles),
    typeorm_1.JoinColumn({ name: 'category_id' }),
    __metadata("design:type", article_category_entity_1.ArticleCategoryEntity)
], ArticleEntity.prototype, "category", void 0);
__decorate([
    typeorm_1.Column({ name: 'header_image' }),
    __metadata("design:type", String)
], ArticleEntity.prototype, "headerImage", void 0);
__decorate([
    typeorm_1.Column({ name: 'thumbnail_image' }),
    __metadata("design:type", String)
], ArticleEntity.prototype, "thumbnailImage", void 0);
__decorate([
    typeorm_1.CreateDateColumn({ name: 'timestamp', type: 'int' }),
    __metadata("design:type", Number)
], ArticleEntity.prototype, "timestamp", void 0);
__decorate([
    typeorm_1.Column({ name: 'user_id' }),
    __metadata("design:type", Number)
], ArticleEntity.prototype, "userID", void 0);
__decorate([
    typeorm_1.ManyToOne(() => user_entity_1.UserEntity),
    typeorm_1.JoinColumn({ name: 'user_id' }),
    __metadata("design:type", user_entity_1.UserEntity)
], ArticleEntity.prototype, "author", void 0);
ArticleEntity = __decorate([
    typeorm_1.Entity('instinct_articles')
], ArticleEntity);
exports.ArticleEntity = ArticleEntity;
