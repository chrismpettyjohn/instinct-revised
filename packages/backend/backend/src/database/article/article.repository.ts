import {Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {ArticleEntity} from './article.entity';
import {InjectRepository} from '@nestjs/typeorm';

@Injectable()
export class ArticleRepository {
  constructor(
    @InjectRepository(ArticleEntity)
    private readonly articleRepo: Repository<ArticleEntity>
  ) {}

  private readonly eagerRelations: string[] = [
    'author',
    'author.rank',
    'category',
  ];

  async create(article: ArticleEntity): Promise<ArticleEntity> {
    const newArticle: ArticleEntity = await this.articleRepo.save(article);
    return this.getByID(newArticle.id!);
  }

  getAll(): Promise<ArticleEntity[]> {
    return this.articleRepo.find({
      relations: this.eagerRelations,
    });
  }

  getByID(articleID: number): Promise<ArticleEntity> {
    return this.articleRepo.findOneOrFail({
      where: {
        id: articleID,
      },
      relations: this.eagerRelations,
    });
  }

  async updateByID(
    articleID: number,
    changes: Partial<ArticleEntity>
  ): Promise<void> {
    await this.articleRepo.update(articleID, changes);
  }

  async deleteByID(articleID: number): Promise<void> {
    await this.articleRepo.delete(articleID);
  }
}
