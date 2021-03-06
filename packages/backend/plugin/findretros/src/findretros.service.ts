import Axios, {AxiosResponse} from 'axios';
import {Injectable} from '@nestjs/common';
import {findRetrosAPI} from './findretros.api';
import {FindRetrosVote} from './findretros.types';
import {ConfigRepository} from '@instinct-api/database';

@Injectable()
export class FindRetrosService {
  constructor(private readonly configRepo: ConfigRepository) {}

  async didIPVote(ipAddress: string): Promise<boolean> {
    const config = await this.configRepo.getConfig();

    if (!config.findRetrosUsername) {
      throw new Error('FindRetros voting is disabled');
    }

    return false;
  }
}
