import {UserEntity} from '../user/user/user.entity';
import {ArticleCategoryEntity} from './article-category.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('instinct_articles')
export class ArticleEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  title!: string;

  @Column()
  description!: string;

  @Column({type: 'text'})
  content!: string;

  @Column({name: 'category_id'})
  categoryID!: number;

  @ManyToOne(() => ArticleCategoryEntity, category => category.articles)
  @JoinColumn({name: 'category_id'})
  category?: ArticleCategoryEntity;

  @Column({name: 'header_image'})
  headerImage!: string;

  @Column({name: 'thumbnail_image'})
  thumbnailImage!: string;

  @CreateDateColumn({name: 'timestamp', type: 'int'})
  timestamp!: number;

  @Column({name: 'user_id'})
  userID!: number;

  @ManyToOne(() => UserEntity)
  @JoinColumn({name: 'user_id'})
  author?: UserEntity;
}
