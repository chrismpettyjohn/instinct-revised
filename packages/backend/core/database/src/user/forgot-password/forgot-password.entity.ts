import {UserEntity} from '../user/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity('user_forgot_password')
export class UserForgotPasswordEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({name: 'user_id', type: 'int4'})
  userID!: number;

  @ManyToOne(() => UserEntity)
  @JoinColumn({name: 'user_id'})
  user?: UserEntity;

  @Column()
  token!: string;

  @Column({name: 'created_at', type: 'timestamp'})
  createdAt!: number;

  @Column({name: 'expires_at', type: 'timestamp'})
  expiresAt!: number;
}
