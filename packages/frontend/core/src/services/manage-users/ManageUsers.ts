import {AxiosResponse} from 'axios';
import {backendAPI} from '../../api';
import {ManageUsersService} from './ManageUsers.types';
import {InternalUser, InternalUserDTO} from '@instinct-prj/interface';

export class ManageUsersServiceImplementation implements ManageUsersService {
  async getAll() {
    const users: AxiosResponse<InternalUser[]> = await backendAPI.get(
      'admin/users'
    );
    return users.data;
  }

  async create(internalUserDTO: InternalUserDTO) {
    const newUser: AxiosResponse<InternalUser> = await backendAPI.post(
      'admin/users',
      internalUserDTO
    );
    return newUser.data;
  }

  async update(userID: number, internalUserDTO: Partial<InternalUserDTO>) {
    const updatedUser: AxiosResponse<InternalUser> = await backendAPI.patch(
      `admin/users/${userID}`,
      internalUserDTO
    );
    return updatedUser.data;
  }

  async delete(userID: number) {
    await backendAPI.delete(`admin/users/${userID}`);
  }
}
