import {Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {GroupEntity} from '@instinct-prj/database-api';

@Injectable()
export class GroupService {
  readonly eagerRelations: Array<keyof GroupEntity> = ['user'];

  constructor(
    @InjectRepository(GroupEntity)
    private readonly groupRepo: Repository<GroupEntity>
  ) {}

  getAll(): Promise<GroupEntity[]> {
    return this.groupRepo.find({
      relations: this.eagerRelations,
    });
  }

  getByID(groupID: number): Promise<GroupEntity> {
    return this.groupRepo.findOneOrFail({
      where: {
        id: groupID,
      },
      relations: this.eagerRelations,
    });
  }
}
