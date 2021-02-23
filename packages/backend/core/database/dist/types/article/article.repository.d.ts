import { Repository } from 'typeorm';
import { ArticleEntity } from './article.entity';
export declare class ArticleRepository {
    private readonly articleRepo;
    constructor(articleRepo: Repository<ArticleEntity>);
    private readonly eagerRelations;
    create(article: ArticleEntity): Promise<ArticleEntity>;
    getAll(): Promise<ArticleEntity[]>;
    getByID(articleID: number): Promise<ArticleEntity>;
    updateByID(articleID: number, changes: Partial<ArticleEntity>): Promise<void>;
    deleteByID(articleID: number): Promise<void>;
}
