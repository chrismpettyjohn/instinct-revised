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
exports.ArticleCategoryEntity = void 0;
const article_entity_1 = require("./article.entity");
const typeorm_1 = require("typeorm");
let ArticleCategoryEntity = class ArticleCategoryEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], ArticleCategoryEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ArticleCategoryEntity.prototype, "name", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ArticleCategoryEntity.prototype, "color", void 0);
__decorate([
    typeorm_1.OneToMany(() => article_entity_1.ArticleEntity, article => article.categoryID),
    __metadata("design:type", Array)
], ArticleCategoryEntity.prototype, "articles", void 0);
ArticleCategoryEntity = __decorate([
    typeorm_1.Entity('instinct_categories')
], ArticleCategoryEntity);
exports.ArticleCategoryEntity = ArticleCategoryEntity;
