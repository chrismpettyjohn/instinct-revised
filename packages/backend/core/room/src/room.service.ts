import {Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {RoomEntity} from '@instinct-prj/database-api';

@Injectable()
export class RoomService {
  private readonly eagerRelations: Array<keyof RoomEntity> = ['owner'];

  constructor(
    @InjectRepository(RoomEntity)
    private readonly roomRepo: Repository<RoomEntity>
  ) {}

  getAll(): Promise<RoomEntity[]> {
    return this.roomRepo.find({
      relations: this.eagerRelations,
    });
  }

  getMostPopular(): Promise<RoomEntity[]> {
    return this.roomRepo.find({
      relations: this.eagerRelations,
      order: {
        users: 'DESC',
      },
      take: 5,
    });
  }

  getByID(roomID: number): Promise<RoomEntity> {
    return this.roomRepo.findOneOrFail({
      where: {
        id: roomID,
      },
      relations: this.eagerRelations,
    });
  }
}
