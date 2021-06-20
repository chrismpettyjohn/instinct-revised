import {UserEntity} from '../user/user/user.entity';
import {ForumPostEntity} from './forum-post.entity';
import {ForumReplyEntity} from './forum-reply.entity';
import {ForumReactionType} from '@instinct-prj/interface';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('instinct_forum_reactions')
export class ForumReactionEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({name: 'user_id', type: 'integer'})
  userID!: number;

  @Column({name: 'post_id', type: 'integer', nullable: true})
  postID?: number;

  @Column({name: 'reply_id', type: 'integer', nullable: true})
  replyID?: number;

  @Column()
  type!: ForumReactionType;

  @Column({name: 'created_at', type: 'integer'})
  createdAt!: number;

  @ManyToOne(() => UserEntity)
  @JoinColumn({name: 'user_id'})
  user?: UserEntity;

  @ManyToOne(() => ForumPostEntity)
  @JoinColumn({name: 'post_id'})
  post?: ForumPostEntity;

  @ManyToOne(() => ForumReplyEntity)
  @JoinColumn({name: 'reply_id'})
  reply?: ForumReplyEntity;
}
