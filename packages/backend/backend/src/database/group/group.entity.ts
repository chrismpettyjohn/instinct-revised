import {UserEntity} from '../user/user/user.entity';
import {RoomEntity} from '../room/room.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';

@Entity('guilds')
export class GroupEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({name: 'user_id', type: 'int'})
  userID!: number;

  @ManyToOne(() => UserEntity)
  @JoinColumn({name: 'user_id'})
  user?: UserEntity;

  @Column({type: 'varchar', length: 50})
  name!: string;

  @Column({type: 'varchar', length: 250})
  description!: string;

  @Column({name: 'room_id', type: 'int'})
  roomID!: number;

  @ManyToOne(() => RoomEntity)
  @JoinColumn({name: 'room_id'})
  room?: RoomEntity;

  @Column({type: 'int'})
  state!: number;

  @Column({type: 'varchar', length: 256})
  badge!: string;

  @Column({name: 'date_created', type: 'int'})
  dateCreated!: number;

  @ManyToMany(() => UserEntity, user => user.joinedGroups)
  @JoinTable({
    name: 'guilds_members',
    joinColumn: {
      name: 'guild_id',
    },
    inverseJoinColumn: {
      name: 'user_id',
    },
  })
  members?: UserEntity[];
}
