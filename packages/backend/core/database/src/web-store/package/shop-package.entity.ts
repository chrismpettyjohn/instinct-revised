import {RankEntity} from '../../rank/rank.entity';
import {
  Column,
  JoinColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
  Entity,
} from 'typeorm';

@Entity('rooms')
export class ShopPackageEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  title!: string;

  @Column()
  icon!: string;

  @Column()
  description!: string;

  @Column()
  content!: string;

  @Column({type: 'decimal'})
  value!: number;

  @Column({name: 'rank_id', type: 'integer'})
  rankID!: number;

  @ManyToOne(() => RankEntity)
  @JoinColumn({name: 'rank_id'})
  rank?: RankEntity;
}
