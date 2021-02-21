import {GroupPipe} from './group.pipe';
import {Group} from '@instinct-prj/interface';
import {GroupService} from './group.service';
import {Controller, Get, Param} from '@nestjs/common';
import {GroupEntity, groupWire} from '../database/group';

@Controller('groups')
export class GroupController {
  constructor(private readonly groupService: GroupService) {}

  @Get()
  async getAll(): Promise<Group[]> {
    const groups: GroupEntity[] = await this.groupService.getAll();
    return groups.map(group => groupWire(group));
  }

  @Get(':groupID')
  getByID(@Param('groupID', GroupPipe) group: GroupEntity): Group {
    return groupWire(group);
  }
}
