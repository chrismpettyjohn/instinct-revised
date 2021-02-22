import {ArticleTypes} from './';
import {AxiosResponse} from 'axios';
import {backendAPI} from '../../api';
import {
  Article,
  ArticleCategory,
  ArticleComment,
  ArticleCommentDTO,
  ArticleDTO,
} from '@instinct-prj/interface';

class ArticleService implements ArticleTypes {
  async getAll() {
    const articles: AxiosResponse<Article[]> = await backendAPI.get('articles');
    return articles.data;
  }

  async getByID(articleID: string) {
    const article: AxiosResponse<Article> = await backendAPI.get(
      `articles/${articleID}`
    );
    return article.data;
  }

  async create(articleDTO: ArticleDTO) {
    const article: AxiosResponse<Article> = await backendAPI.post('articles', {
      ...articleDTO,
    });
    return article.data;
  }

  async updateByID(articleID: string, articleDTO: Partial<ArticleDTO>) {
    await backendAPI.patch(`articles/${articleID}`, {...articleDTO});
  }

  async deleteByID(articleID: number) {
    await backendAPI.delete(`articles/${articleID}`);
  }

  async getAllCategories() {
    const categories: AxiosResponse<ArticleCategory[]> = await backendAPI.get(
      'categories'
    );
    return categories.data;
  }

  async createCategory(name: string, color: string) {
    const newCategory: AxiosResponse<ArticleCategory> = await backendAPI.post(
      'categories',
      {name, color}
    );
    return newCategory.data;
  }

  async deleteCategoryByID(categoryID: number) {
    await backendAPI.delete(`categories/${categoryID}`);
  }

  async createComment(articleID: number, commentDTO: ArticleCommentDTO) {
    const newComment: AxiosResponse<ArticleComment> = await backendAPI.post(
      `articles/${articleID}/comments`,
      commentDTO
    );
    return newComment.data;
  }

  async deleteComment(articleID: number, commentID: number) {
    await backendAPI.delete(`articles/${articleID}/comments/${commentID}`);
  }
}

export const articleService: ArticleTypes = new ArticleService();
