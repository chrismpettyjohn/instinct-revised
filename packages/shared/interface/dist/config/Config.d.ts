export interface Config {
    siteName: string;
    siteLink: string;
    siteBeta: boolean;
    emulatorIP: string;
    emulatorPort: string;
    nitroURL: string;
    loadingMessage: string;
    rankBadgeURL: string;
    groupBadgeURL: string;
    googleRecaptchaClientKey: string;
    websocketEnabled: boolean;
    websocketIP: string;
    websocketPort: string;
    discordURL: string;
    maintenanceEnabled: boolean;
}
export declare const defaultConfig: Config;
