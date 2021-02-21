import {GroupService} from './';
import {AxiosResponse} from 'axios';
import {backendAPI} from '../../api';
import {Group} from '@instinct-prj/interface';

class GroupServiceImplementation implements GroupService {
  async getAll() {
    const groups: AxiosResponse<Group[]> = await backendAPI.get('groups');
    return groups.data;
  }

  async getMostPopular() {
    const groups: AxiosResponse<Group[]> = await backendAPI.get('groups');
    return groups.data;
  }

  async getByID(groupID: string): Promise<Group> {
    const group: AxiosResponse<Group> = await backendAPI.get(
      `groups/${groupID}`
    );
    return group.data;
  }
}

export const groupService: GroupService = new GroupServiceImplementation();
