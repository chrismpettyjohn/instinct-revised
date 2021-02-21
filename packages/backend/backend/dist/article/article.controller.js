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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleController = void 0;
const moment_1 = __importDefault(require("moment"));
const session_1 = require("../session");
const article_pipe_1 = require("./article.pipe");
const user_1 = require("../database/user");
const article_1 = require("../database/article");
const article_dto_1 = require("./article.dto");
const permission_scope_decorator_1 = require("../session/permission-scope.decorator");
const article_2 = require("../database/article");
const common_1 = require("@nestjs/common");
let ArticleController = class ArticleController {
    constructor(articleRepo) {
        this.articleRepo = articleRepo;
    }
    create(session, newArticle) {
        return __awaiter(this, void 0, void 0, function* () {
            const article = yield this.articleRepo.create(Object.assign(Object.assign({}, newArticle), { userID: session.id, timestamp: moment_1.default().unix() }));
            return article_2.articleWire(article);
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const articles = yield this.articleRepo.getAll();
            return articles.map(article => article_2.articleWire(article));
        });
    }
    getByID(article) {
        return article_2.articleWire(article);
    }
    updateByID(article, changes) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.articleRepo.updateByID(article.id, changes);
            return 'Your changes have been saved';
        });
    }
    deleteByID(article) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.articleRepo.deleteByID(article.id);
            return 'Article has been deleted successfully';
        });
    }
};
__decorate([
    common_1.Post(),
    permission_scope_decorator_1.HasScope('websiteManageNews'),
    __param(0, session_1.GetSession()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_1.UserEntity,
        article_dto_1.CreateArticleDTO]),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "create", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "getAll", null);
__decorate([
    common_1.Get(':articleID'),
    __param(0, common_1.Param('articleID', article_pipe_1.ArticlePipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [article_2.ArticleEntity]),
    __metadata("design:returntype", Object)
], ArticleController.prototype, "getByID", null);
__decorate([
    common_1.Patch(':articleID'),
    permission_scope_decorator_1.HasScope('websiteManageNews'),
    __param(0, common_1.Param('articleID', article_pipe_1.ArticlePipe)),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [article_2.ArticleEntity,
        article_dto_1.UpdateArticleDTO]),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "updateByID", null);
__decorate([
    common_1.Delete(':articleID'),
    permission_scope_decorator_1.HasScope('websiteManageNews'),
    __param(0, common_1.Param('articleID', article_pipe_1.ArticlePipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [article_2.ArticleEntity]),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "deleteByID", null);
ArticleController = __decorate([
    common_1.Controller('articles'),
    __metadata("design:paramtypes", [article_1.ArticleRepository])
], ArticleController);
exports.ArticleController = ArticleController;
