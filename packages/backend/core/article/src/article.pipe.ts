import {ArticleEntity, ArticleRepository} from '@instinct-prj/database-api';
import {PipeTransform, Injectable, NotFoundException} from '@nestjs/common';

@Injectable()
export class ArticlePipe implements PipeTransform {
  constructor(private readonly articleRepo: ArticleRepository) {}

  async transform(articleID: number): Promise<ArticleEntity> {
    try {
      return await this.articleRepo.getByID(articleID);
    } catch {
      throw new NotFoundException('Article does not exist');
    }
  }
}
