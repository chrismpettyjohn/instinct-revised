import {ConfigService} from './';
import {AxiosResponse} from 'axios';
import {backendAPI} from '../../api';
import {Config, ConfigDTO, Health} from '@instinct-prj/interface';

class ConfigServiceImplementation implements ConfigService {
  async getConfig(): Promise<Config> {
    const config: AxiosResponse<Config> = await backendAPI.get('config');
    return config.data;
  }

  async getFullConfig(): Promise<ConfigDTO> {
    const config: AxiosResponse<ConfigDTO> = await backendAPI.get(
      'config/full'
    );
    return config.data;
  }

  async updateConfig(config: ConfigDTO): Promise<void> {
    await backendAPI.post('config', config);
  }

  async getHealth(): Promise<Health> {
    const health: AxiosResponse<Health> = await backendAPI.get('health');
    return health.data;
  }
}

export const configService: ConfigService = new ConfigServiceImplementation();
