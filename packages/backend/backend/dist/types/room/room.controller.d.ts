import { Room } from '@instinct-prj/interface';
import { RoomFilterDTO } from './room-filter.dto';
import { RoomEntity, RoomRepository } from '../database/room';
export declare class RoomController {
    private readonly roomRepo;
    constructor(roomRepo: RoomRepository);
    getAll(roomFilterDTO: RoomFilterDTO): Promise<Room[]>;
    getMostPopular(): Promise<Room[]>;
    getByID(room: RoomEntity): Room;
}
