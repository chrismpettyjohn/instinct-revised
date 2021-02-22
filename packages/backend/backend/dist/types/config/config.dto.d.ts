import { ConfigDTO } from '@instinct-prj/interface';
export declare class UpdateConfigDTO implements ConfigDTO {
    siteName: string;
    siteLink: string;
    siteBeta: boolean;
    emulatorIP: string;
    emulatorPort: string;
    nitroURL: string;
    loadingMessage: string;
    groupBadgeURL: string;
    rankBadgeURL: string;
    sendGridAPIKey: string;
    sendGridAPISender: string;
    sendGridForgotPasswordTemplate: string;
    googleRecaptchaClientKey: string;
    websocketEnabled: boolean;
    websocketIP: string;
    websocketPort: string;
    discordURL: string;
    maintenanceEnabled: boolean;
}
