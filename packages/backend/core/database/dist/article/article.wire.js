"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.articleWire = void 0;
const user_1 = require("../user");
const article_category_wire_1 = require("./article-category.wire");
const article_comment_wire_1 = require("./article-comment.wire");
function articleWire(articleEntity) {
    return {
        id: articleEntity.id,
        title: articleEntity.title,
        headerImage: articleEntity.headerImage,
        thumbnailImage: articleEntity.thumbnailImage,
        datePosted: articleEntity.timestamp,
        description: articleEntity.description,
        content: articleEntity.content,
        author: user_1.userWire(articleEntity.author),
        category: article_category_wire_1.articleCategoryWire(articleEntity.category),
        comments: articleEntity.comments.map(_ => article_comment_wire_1.articleCommentWire(_)),
    };
}
exports.articleWire = articleWire;
