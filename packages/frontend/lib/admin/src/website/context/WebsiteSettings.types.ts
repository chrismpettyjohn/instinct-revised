import {ConfigDTO, exampleConfigDTO} from '@instinct-prj/interface';

export interface WebsiteSettingsContextState {
  config: ConfigDTO;
  showError: boolean;
  showSpinner: boolean;
}

export const defaultWebsiteSettingsContextState: WebsiteSettingsContextState = {
  config: exampleConfigDTO,
  showError: false,
  showSpinner: false,
};

export interface WebsiteSettingsContext extends WebsiteSettingsContextState {
  setConfig<K extends keyof ConfigDTO>(key: K, value: ConfigDTO[K]): void;
  saveChanges(): Promise<void>;
}

export const defaultWebsiteSettingsContext: WebsiteSettingsContext = {
  ...defaultWebsiteSettingsContextState,
  setConfig<K extends keyof ConfigDTO>(key: K, value: ConfigDTO[K]) {},
  saveChanges() {
    return Promise.resolve();
  },
};
