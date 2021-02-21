import { Group } from '@instinct-prj/interface';
import { GroupService } from './group.service';
import { GroupEntity } from '../database/group';
export declare class GroupController {
    private readonly groupService;
    constructor(groupService: GroupService);
    getAll(): Promise<Group[]>;
    getByID(group: GroupEntity): Group;
}
