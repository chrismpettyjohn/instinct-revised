import { RoomService } from './room.service';
import { RoomEntity } from '../database/room';
import { PipeTransform } from '@nestjs/common';
export declare class RoomPipe implements PipeTransform {
    private readonly roomService;
    constructor(roomService: RoomService);
    transform(roomID: number): Promise<RoomEntity>;
}
