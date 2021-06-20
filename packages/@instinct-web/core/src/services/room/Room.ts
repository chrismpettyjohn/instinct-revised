import {RoomService} from './';
import {AxiosResponse} from 'axios';
import {backendAPI} from '../../api';
import {stringify} from 'querystring';
import {Room, RoomFilter} from '@instinct-prj/interface';

class RoomServiceImplementation implements RoomService {
  async getAll(filter?: RoomFilter) {
    const rooms: AxiosResponse<Room[]> = await backendAPI.get(
      `rooms?${stringify(filter ?? ({} as any))}`
    );
    return rooms.data;
  }

  async getMostPopular() {
    const mostPopularRooms: AxiosResponse<Room[]> = await backendAPI.get(
      'rooms/most_popular'
    );
    return mostPopularRooms.data;
  }

  async getByID(roomID: string): Promise<Room> {
    const room: AxiosResponse<Room> = await backendAPI.get(`rooms/${roomID}`);
    return room.data;
  }
}

export const roomService: RoomService = new RoomServiceImplementation();
