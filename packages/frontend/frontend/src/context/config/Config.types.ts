import {Config, defaultConfig} from '@instinct-prj/interface';

export interface ConfigContext {
  config: Config;
  setConfig(changes: Partial<Config>): void;
}

export const defaultConfigInterface: ConfigContext = {
  config: defaultConfig,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setConfig(changes: Partial<Config>) {},
};
