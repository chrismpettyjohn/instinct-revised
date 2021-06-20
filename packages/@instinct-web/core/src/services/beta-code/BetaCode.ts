import {AxiosResponse} from 'axios';
import {backendAPI} from '../../api';
import {BetaCodeService} from './BetaCode.types';
import {BetaCode} from '@instinct-prj/interface';

export class BetaCodeServiceImplementation implements BetaCodeService {
  async create() {
    const betaCode: AxiosResponse<BetaCode> = await backendAPI.post(
      'beta-codes'
    );
    return betaCode.data;
  }

  async getAll() {
    const betaCodes: AxiosResponse<BetaCode[]> = await backendAPI.get(
      'beta-codes'
    );
    return betaCodes.data;
  }

  async delete(code: string) {
    await backendAPI.delete(`beta-codes/${code}`);
  }
}
