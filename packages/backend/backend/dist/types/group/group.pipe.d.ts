import { GroupService } from './group.service';
import { GroupEntity } from '../database/group';
import { PipeTransform } from '@nestjs/common';
export declare class GroupPipe implements PipeTransform {
    private readonly groupService;
    constructor(groupService: GroupService);
    transform(groupID: number): Promise<GroupEntity>;
}
