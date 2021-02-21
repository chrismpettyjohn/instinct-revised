import {UserEntity} from '../user/user/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';

@Entity('instinct_beta_codes')
@Unique(['betaCode'])
export class BetaCodeEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({name: 'beta_code', type: 'varchar', length: '100'})
  betaCode!: string;

  @Column({name: 'user_id'})
  userID?: number;

  @ManyToOne(() => UserEntity)
  @JoinColumn({name: 'user_id'})
  user?: UserEntity;
}
