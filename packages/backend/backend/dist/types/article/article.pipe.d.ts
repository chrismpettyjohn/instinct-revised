import { ArticleEntity, ArticleRepository } from '../database';
import { PipeTransform } from '@nestjs/common';
export declare class ArticlePipe implements PipeTransform {
    private readonly articleRepo;
    constructor(articleRepo: ArticleRepository);
    transform(articleID: number): Promise<ArticleEntity>;
}
