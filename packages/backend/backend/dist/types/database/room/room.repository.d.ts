import { Repository } from 'typeorm';
import { RoomEntity } from './room.entity';
import { BaseRepository } from '../base.repository';
export declare class RoomRepository extends BaseRepository<RoomEntity> {
    constructor(roomRepo: Repository<RoomEntity>);
}
