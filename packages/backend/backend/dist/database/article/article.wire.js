"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.articleWire = void 0;
const user_1 = require("../user");
const article_category_wire_1 = require("./article-category.wire");
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
    };
}
exports.articleWire = articleWire;
