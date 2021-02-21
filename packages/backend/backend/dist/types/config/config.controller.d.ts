import { UpdateConfigDTO } from './config.dto';
import { Config, ConfigDTO } from '@instinct-prj/interface';
import { ConfigRepository } from '../database/config/config.repository';
export declare class ConfigController {
    private readonly configRepo;
    constructor(configRepo: ConfigRepository);
    getConfig(): Promise<Config>;
    getFullConfig(): Promise<ConfigDTO>;
    updateConfig(configDTO: UpdateConfigDTO): Promise<Config>;
}
