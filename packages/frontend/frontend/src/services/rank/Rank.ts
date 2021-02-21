import {RankTypes} from './';
import {AxiosResponse} from 'axios';
import {backendAPI} from '../../api';
import {Rank, RankDTO} from '@instinct-prj/interface';

class RankService implements RankTypes {
  async create(rankDTO: RankDTO) {
    const newRank: AxiosResponse<Rank> = await backendAPI.post(
      'ranks',
      rankDTO
    );
    return newRank.data;
  }

  async getAll() {
    const ranks: AxiosResponse<Rank[]> = await backendAPI.get('ranks');
    return ranks.data;
  }

  async getStaff() {
    const ranks: AxiosResponse<Rank[]> = await backendAPI.get('ranks/staff');
    return ranks.data;
  }

  async getByID(rankID: string): Promise<any> {
    const rank: AxiosResponse<Rank> = await backendAPI.get(`ranks/${rankID}`);
    return rank.data;
  }

  async updateByID(rankID: string, rankDTO: RankDTO) {
    await backendAPI.patch(`ranks/${rankID}`, rankDTO);
  }

  async deleteByID(rankID: string) {
    await backendAPI.delete(`ranks/${rankID}`);
  }
}

export const rankService: RankTypes = new RankService();
