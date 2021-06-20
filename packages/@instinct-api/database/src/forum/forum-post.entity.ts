import {UserEntity} from '../user/user/user.entity';
import {ForumSectionEntity} from './forum-section.entity';
import {ForumReactionEntity} from './forum-reaction.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('instinct_forum_posts')
export class ForumPostEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({name: 'section_id', type: 'integer'})
  sectionID!: number;

  @Column({name: 'user_id', type: 'integer'})
  userID!: number;

  @Column()
  title!: string;

  @Column({type: 'text'})
  body!: string;

  @Column({name: 'created_at', type: 'integer'})
  createdAt!: number;

  @Column({name: 'updated_at', type: 'integer'})
  updatedAt!: number;

  @ManyToOne(() => ForumSectionEntity)
  @JoinColumn({name: 'section_id'})
  section?: ForumSectionEntity;

  @ManyToOne(() => UserEntity)
  @JoinColumn({name: 'user_id'})
  user?: UserEntity;

  @OneToMany(() => ForumReactionEntity, forumReaction => forumReaction.post)
  reactions?: ForumReactionEntity[];
}
