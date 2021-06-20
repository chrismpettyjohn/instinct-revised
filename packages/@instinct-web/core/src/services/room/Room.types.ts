import {Room, RoomFilter} from '@instinct-prj/interface';

export interface RoomService {
  getAll(filter?: RoomFilter): Promise<Room[]>;

  getMostPopular(): Promise<Room[]>;

  getByID(roomID: string): Promise<Room>;
}
