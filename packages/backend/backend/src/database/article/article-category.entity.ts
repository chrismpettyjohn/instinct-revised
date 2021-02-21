import {ArticleEntity} from './article.entity';
import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm';

@Entity('instinct_categories')
export class ArticleCategoryEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name!: string;

  @Column()
  color!: string;

  @OneToMany(() => ArticleEntity, article => article.categoryID)
  articles?: ArticleEntity[];
}
