import {AxiosResponse} from 'axios';
import {Injectable} from '@nestjs/common';
import {googleRecaptchaAPI} from './recaptcha.axios';
import {ConfigRepository} from '@instinct-prj/database-api';

@Injectable()
export class GoogleRecaptchaService {
  constructor(private readonly configRepo: ConfigRepository) {}

  async passedVerification(response: string): Promise<boolean> {
    const config = await this.configRepo.getConfig();
    const {
      data,
    }: AxiosResponse<
      Record<'success', boolean>
    > = await googleRecaptchaAPI.post(
      `siteverify?secret=${config.googleRecaptchaSecretKey}&response=${response}`
    );
    return data.success;
  }
}
