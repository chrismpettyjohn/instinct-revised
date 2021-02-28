import {UserEntity} from '../user/user/user.entity';
import {ForumReactionEntity} from './forum-reaction.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('instinct_forum_replies')
export class ForumReplyEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({name: 'post_id', type: 'integer'})
  postID!: number;

  @Column({name: 'user_id', type: 'integer'})
  userID!: number;

  @Column({type: 'text'})
  content!: string;

  @Column({name: 'created_at', type: 'integer'})
  createdAt!: number;

  @Column({name: 'updated_at', type: 'integer'})
  updatedAt!: number;

  @ManyToOne(() => UserEntity)
  @JoinColumn({name: 'user_id'})
  user?: UserEntity;

  @OneToMany(() => ForumReactionEntity, forumReaction => forumReaction.reply)
  reactions?: ForumReactionEntity[];
}
