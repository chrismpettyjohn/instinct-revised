import {AxiosResponse} from 'axios';
import {backendAPI} from '../../api';
import {BanService} from './Ban.types';
import {UserBan, UserBanDTO} from '@instinct-prj/interface';

class BanServiceImplementation implements BanService {
  async create(banDTO: UserBanDTO) {
    const newBan: AxiosResponse<UserBan> = await backendAPI.post(
      'user/bans',
      banDTO
    );
    return newBan.data;
  }

  async getAll() {
    const bans: AxiosResponse<UserBan[]> = await backendAPI.get('user/bans');
    return bans.data;
  }

  async getByID(banID: string) {
    const ban: AxiosResponse<UserBan> = await backendAPI.get(
      `user/bans/${banID}`
    );
    return ban.data;
  }

  async updateByID(banID: string, banDTO: UserBanDTO) {
    await backendAPI.patch(`user/bans/${banID}`, banDTO);
  }

  async deleteByID(banID: string) {
    await backendAPI.delete(`user/bans/${banID}`);
  }
}

export const banService: BanService = new BanServiceImplementation();
