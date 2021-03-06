import {AxiosResponse} from 'axios';
import {Injectable} from '@nestjs/common';
import {findRetrosAPI} from './findretros.api';
import {FindRetrosVote} from './findretros.types';
import {ConfigRepository} from '@instinct-api/database';

@Injectable()
export class FindRetrosService {
  constructor(private readonly configRepo: ConfigRepository) {}

  async didIPVote(ipAddress: string): Promise<boolean> {
    try {
      const config = await this.configRepo.getConfig();

      if (!config.findRetrosUsername) {
        throw new Error('FindRetros voting is disabled');
      }

      const response: AxiosResponse<FindRetrosVote> = await findRetrosAPI.get(
        `validate?user=${config.findRetrosUsername}&ip=${ipAddress}`
      );
      return response.data === FindRetrosVote.Voted;
    } catch (e) {
      console.log(`Failed to check FindRetros vote due to ${e.message}`);
      throw e;
    }
  }
}
