"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configDTOWire = exports.configWire = void 0;
function configWire(configEntity) {
    return {
        siteName: configEntity.siteName,
        siteLink: configEntity.siteLink,
        siteBeta: configEntity.siteBeta === 1,
        emulatorIP: configEntity.emulatorIP,
        emulatorPort: configEntity.emulatorPort,
        nitroURL: configEntity.nitroURL,
        loadingMessage: configEntity.loadingMessage,
        groupBadgeURL: configEntity.groupBadgeURL,
        googleRecaptchaClientKey: configEntity.googleRecaptchaClientKey,
        websocketEnabled: configEntity.websocketEnabled === 1,
        websocketIP: configEntity.websocketIP,
        websocketPort: configEntity.websocketPort,
        discordURL: configEntity.discordURL,
        rankBadgeURL: configEntity.rankBadgeURL,
        maintenanceEnabled: configEntity.maintenanceEnabled === 1,
    };
}
exports.configWire = configWire;
function configDTOWire(configEntity) {
    return Object.assign(Object.assign({}, configWire(configEntity)), { siteBeta: configEntity.siteBeta === 1, sendGridAPIKey: configEntity.sendGridAPIKey, sendGridAPISender: configEntity.sendGridAPISender, sendGridForgotPasswordTemplate: configEntity.sendGridForgotPasswordTemplate, googleRecaptchaClientKey: configEntity.googleRecaptchaClientKey, maintenanceEnabled: configEntity.maintenanceEnabled === 1 });
}
exports.configDTOWire = configDTOWire;
