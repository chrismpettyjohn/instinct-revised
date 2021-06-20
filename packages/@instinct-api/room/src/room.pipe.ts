import {RoomService} from './room.service';
import {RoomEntity} from '@instinct-api/database';
import {PipeTransform, Injectable, NotFoundException} from '@nestjs/common';

@Injectable()
export class RoomPipe implements PipeTransform {
  constructor(private readonly roomService: RoomService) {}

  async transform(roomID: number): Promise<RoomEntity> {
    try {
      return await this.roomService.getByID(roomID);
    } catch {
      throw new NotFoundException('Room does not exist');
    }
  }
}
