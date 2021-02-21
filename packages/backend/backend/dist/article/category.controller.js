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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleCategoryController = void 0;
const category_pipe_1 = require("./category.pipe");
const category_dto_1 = require("./category.dto");
const permission_scope_decorator_1 = require("../session/permission-scope.decorator");
const article_1 = require("../database/article");
const common_1 = require("@nestjs/common");
const article_2 = require("../database/article");
let ArticleCategoryController = class ArticleCategoryController {
    constructor(articleCategoryRepo) {
        this.articleCategoryRepo = articleCategoryRepo;
    }
    getAllCategories() {
        return __awaiter(this, void 0, void 0, function* () {
            const categories = yield this.articleCategoryRepo.find();
            return categories.map(_ => article_2.articleCategoryWire(_));
        });
    }
    createCategory(categoryDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            const category = yield this.articleCategoryRepo.create(categoryDTO);
            return article_2.articleCategoryWire(category);
        });
    }
    updateCategory(category, categoryDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.articleCategoryRepo.update({ id: category.id }, categoryDTO);
            return 'Your changes have been saved';
        });
    }
    deleteCategory(category) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.articleCategoryRepo.delete({ id: category.id });
            return 'Article category has been deleted';
        });
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ArticleCategoryController.prototype, "getAllCategories", null);
__decorate([
    common_1.Post(),
    permission_scope_decorator_1.HasScope('websiteManageNews'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [category_dto_1.ArticleCategoryDTO]),
    __metadata("design:returntype", Promise)
], ArticleCategoryController.prototype, "createCategory", null);
__decorate([
    common_1.Patch(':categoryID'),
    permission_scope_decorator_1.HasScope('websiteManageNews'),
    __param(0, common_1.Param('categoryID', category_pipe_1.CategoryPipe)),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [article_2.ArticleCategoryEntity,
        category_dto_1.ArticleCategoryDTO]),
    __metadata("design:returntype", Promise)
], ArticleCategoryController.prototype, "updateCategory", null);
__decorate([
    common_1.Delete(':categoryID'),
    permission_scope_decorator_1.HasScope('websiteManageNews'),
    __param(0, common_1.Param('categoryID', category_pipe_1.CategoryPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [article_2.ArticleCategoryEntity]),
    __metadata("design:returntype", Promise)
], ArticleCategoryController.prototype, "deleteCategory", null);
ArticleCategoryController = __decorate([
    common_1.Controller('categories'),
    __metadata("design:paramtypes", [article_1.ArticleCategoryRepository])
], ArticleCategoryController);
exports.ArticleCategoryController = ArticleCategoryController;
