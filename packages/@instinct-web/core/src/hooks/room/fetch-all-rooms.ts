import {roomService} from '../../services/room';
import {createFetchHook} from '../fetch-hook.base';
import {Room, RoomFilter} from '@instinct-prj/interface';

export const useFetchAllRooms = (filter?: RoomFilter) =>
  createFetchHook<Room[]>(() => roomService.getAll(filter));
