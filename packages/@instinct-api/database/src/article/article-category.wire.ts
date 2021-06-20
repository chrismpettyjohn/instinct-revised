import {ArticleCategory} from '@instinct-prj/interface';
import {ArticleCategoryEntity} from './article-category.entity';

export function articleCategoryWire(
  articleCategoryEntity: ArticleCategoryEntity
): ArticleCategory {
  return {
    id: articleCategoryEntity.id!,
    name: articleCategoryEntity.name,
    color: articleCategoryEntity.color,
  };
}
