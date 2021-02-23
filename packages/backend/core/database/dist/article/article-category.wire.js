"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.articleCategoryWire = void 0;
function articleCategoryWire(articleCategoryEntity) {
    return {
        id: articleCategoryEntity.id,
        name: articleCategoryEntity.name,
        color: articleCategoryEntity.color,
    };
}
exports.articleCategoryWire = articleCategoryWire;
