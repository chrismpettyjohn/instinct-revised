import {RoomPipe} from './room.pipe';
import {FindConditions} from 'typeorm';
import {Room} from '@instinct-prj/interface';
import {RoomFilterDTO} from './room-filter.dto';
import {Controller, Get, Param, Query} from '@nestjs/common';
import {
  OrderBy,
  RoomEntity,
  RoomRepository,
  roomWire,
} from '@instinct-api/database';

@Controller('rooms')
export class RoomController {
  constructor(private readonly roomRepo: RoomRepository) {}

  @Get()
  async getAll(@Query() roomFilterDTO: RoomFilterDTO): Promise<Room[]> {
    const [where, sort]: [FindConditions<RoomEntity>, OrderBy<RoomEntity>] = [
      {},
      {},
    ];

    if (roomFilterDTO.owner) {
      where.ownerName = roomFilterDTO.owner;
    }

    const rooms: RoomEntity[] = await this.roomRepo.find(where, sort);
    return rooms.map(room => roomWire(room));
  }

  @Get('most_popular')
  async getMostPopular(): Promise<Room[]> {
    const mostPopularRooms: RoomEntity[] = await this.roomRepo.find(undefined, {
      usersMax: 'DESC',
    });
    return mostPopularRooms.map(room => roomWire(room));
  }

  @Get(':roomID')
  getByID(@Param('roomID', RoomPipe) room: RoomEntity): Room {
    return roomWire(room);
  }
}
