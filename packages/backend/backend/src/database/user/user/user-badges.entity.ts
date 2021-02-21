import {UserEntity} from './user.entity';
import {Badge} from '@instinct-prj/interface';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

export function badgeWire(badge: UserBadgesEntity): Badge {
  return {
    id: badge.id!,
    code: badge.code,
  };
}

@Entity('users_badges')
export class UserBadgesEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({name: 'user_id'})
  userID!: number;

  @ManyToOne(() => UserEntity, user => user.badges)
  @JoinColumn({name: 'user_id'})
  user?: UserEntity;

  @Column({name: 'slot_id', default: 0})
  slotID!: number;

  @Column({name: 'badge_code'})
  code!: string;
}
