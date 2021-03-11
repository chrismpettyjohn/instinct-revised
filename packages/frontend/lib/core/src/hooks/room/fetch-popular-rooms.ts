import {Room} from '@instinct-prj/interface';
import {roomService} from '../../services/room';
import {createFetchHook} from '../fetch-hook.base';

export const useFetchPopularRooms = () =>
  createFetchHook<Room[]>(roomService.getMostPopular);
