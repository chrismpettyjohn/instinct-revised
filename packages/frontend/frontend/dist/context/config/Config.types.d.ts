import { Config } from '@instinct-prj/interface';
export interface ConfigContext {
    config: Config;
    setConfig(changes: Partial<Config>): void;
}
export declare const defaultConfigInterface: ConfigContext;
