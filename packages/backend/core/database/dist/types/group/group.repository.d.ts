import { Repository } from 'typeorm';
import { GroupEntity } from './group.entity';
import { BaseRepository } from '../base.repository';
export declare class GroupRepository extends BaseRepository<GroupEntity> {
    constructor(groupRepo: Repository<GroupEntity>);
}
