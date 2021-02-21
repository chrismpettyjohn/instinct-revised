export interface ConfigDTO {
    siteName: string;
    siteLink: string;
    siteBeta: boolean;
    emulatorIP: string;
    emulatorPort: string;
    swfAdminHabbo: string;
    swfHabbo: string;
    swfExternalVariables: string;
    swfExternalTexts: string;
    swfProductData: string;
    swfFurniData: string;
    swfFigureData: string;
    swfBaseURL: string;
    swfBadgeURL: string;
    swfOverrideVariables: string;
    swfOverrideTexts: string;
    loadingMessage: string;
    groupBadgeURL: string;
    sendGridAPIKey: string;
    sendGridAPISender: string;
    sendGridForgotPasswordTemplate: string;
    googleRecaptchaClientKey: string;
    websocketEnabled: boolean;
    websocketIP: string;
    websocketPort: string;
}
export declare const exampleConfigDTO: ConfigDTO;
