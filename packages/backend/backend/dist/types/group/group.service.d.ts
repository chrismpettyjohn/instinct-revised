import { Repository } from 'typeorm';
import { GroupEntity } from '../database/group';
export declare class GroupService {
    private readonly groupRepo;
    readonly eagerRelations: Array<keyof GroupEntity>;
    constructor(groupRepo: Repository<GroupEntity>);
    getAll(): Promise<GroupEntity[]>;
    getByID(groupID: number): Promise<GroupEntity>;
}
