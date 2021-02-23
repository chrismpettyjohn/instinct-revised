import {GroupService} from './group.service';
import {GroupEntity} from '@instinct-api/database';
import {PipeTransform, Injectable, NotFoundException} from '@nestjs/common';

@Injectable()
export class GroupPipe implements PipeTransform {
  constructor(private readonly groupService: GroupService) {}

  async transform(groupID: number): Promise<GroupEntity> {
    try {
      return await this.groupService.getByID(groupID);
    } catch {
      throw new NotFoundException('Group does not exist');
    }
  }
}
