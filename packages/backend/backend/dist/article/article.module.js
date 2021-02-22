"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleModule = void 0;
const common_1 = require("@nestjs/common");
const session_1 = require("../session");
const article_pipe_1 = require("./article.pipe");
const database_1 = require("../database");
const category_pipe_1 = require("./category.pipe");
const article_controller_1 = require("./article.controller");
const category_controller_1 = require("./category.controller");
const article_comment_controller_1 = require("./article-comment.controller");
const article_comment_pipe_1 = require("./article-comment.pipe");
let ArticleModule = class ArticleModule {
};
ArticleModule = __decorate([
    common_1.Module({
        imports: [session_1.SessionModule, database_1.DatabaseModule],
        controllers: [
            article_controller_1.ArticleController,
            category_controller_1.ArticleCategoryController,
            article_comment_controller_1.ArticleCommentController,
        ],
        providers: [article_pipe_1.ArticlePipe, category_pipe_1.CategoryPipe, article_comment_pipe_1.ArticleCommentPipe],
        exports: [article_pipe_1.ArticlePipe, category_pipe_1.CategoryPipe, article_comment_pipe_1.ArticleCommentPipe],
    })
], ArticleModule);
exports.ArticleModule = ArticleModule;
