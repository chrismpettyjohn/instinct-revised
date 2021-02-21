import {UserEntity} from '../user/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';

@Entity('instinct_guestbook')
export class UserGuestbookEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({name: 'profile_id', type: 'int'})
  profileID!: number;

  @ManyToOne(() => UserEntity)
  @JoinColumn({name: 'profile_id'})
  profile?: UserEntity;

  @Column({name: 'author_id', type: 'int'})
  authorID!: number;

  @ManyToOne(() => UserEntity)
  @JoinColumn({name: 'author_id'})
  author?: UserEntity;

  @Column({type: 'text'})
  content!: string;

  @Column({type: 'int'})
  timestamp!: number;
}
