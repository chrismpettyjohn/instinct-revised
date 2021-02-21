import {Repository} from 'typeorm';
import {RoomEntity} from './room.entity';
import {Injectable} from '@nestjs/common';
import {BaseRepository} from '../base.repository';
import {InjectRepository} from '@nestjs/typeorm';

@Injectable()
export class RoomRepository extends BaseRepository<RoomEntity> {
  constructor(@InjectRepository(RoomEntity) roomRepo: Repository<RoomEntity>) {
    super(roomRepo, ['owner']);
  }
}
