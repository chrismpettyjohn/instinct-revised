import { Repository } from 'typeorm';
import { RoomEntity } from '../database/room';
export declare class RoomService {
    private readonly roomRepo;
    private readonly eagerRelations;
    constructor(roomRepo: Repository<RoomEntity>);
    getAll(): Promise<RoomEntity[]>;
    getMostPopular(): Promise<RoomEntity[]>;
    getByID(roomID: number): Promise<RoomEntity>;
}
