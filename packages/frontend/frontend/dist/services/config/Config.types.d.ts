import { Config, ConfigDTO, Health } from '@instinct-prj/interface';
export interface ConfigService {
    getConfig(): Promise<Config>;
    getFullConfig(): Promise<ConfigDTO>;
    updateConfig(config: ConfigDTO): Promise<void>;
    getHealth(): Promise<Health>;
}
