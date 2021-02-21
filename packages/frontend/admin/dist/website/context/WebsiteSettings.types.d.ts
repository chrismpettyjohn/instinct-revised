import { ConfigDTO } from '@instinct-prj/interface';
export interface WebsiteSettingsContextState {
    config: ConfigDTO;
    showError: boolean;
    showSpinner: boolean;
}
export declare const defaultWebsiteSettingsContextState: WebsiteSettingsContextState;
export interface WebsiteSettingsContext extends WebsiteSettingsContextState {
    setConfig<K extends keyof ConfigDTO>(key: K, value: ConfigDTO[K]): void;
    saveChanges(): Promise<void>;
}
export declare const defaultWebsiteSettingsContext: WebsiteSettingsContext;
