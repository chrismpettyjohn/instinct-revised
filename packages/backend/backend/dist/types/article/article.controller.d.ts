import { Article } from '@instinct-prj/interface';
import { UserEntity } from '../database/user';
import { ArticleRepository } from '../database/article';
import { CreateArticleDTO, UpdateArticleDTO } from './article.dto';
import { ArticleEntity } from '../database/article';
export declare class ArticleController {
    private readonly articleRepo;
    constructor(articleRepo: ArticleRepository);
    create(session: UserEntity, newArticle: CreateArticleDTO): Promise<Article>;
    getAll(): Promise<Article[]>;
    getByID(article: ArticleEntity): Article;
    updateByID(article: ArticleEntity, changes: UpdateArticleDTO): Promise<string>;
    deleteByID(article: ArticleEntity): Promise<string>;
}
