import {ConfigEntity} from './config.entity';
import {Config, ConfigDTO} from '@instinct-prj/interface';

export function configWire(configEntity: ConfigEntity): Config {
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
  };
}

export function configDTOWire(configEntity: ConfigEntity): ConfigDTO {
  return {
    ...configWire(configEntity),
    siteBeta: configEntity.siteBeta === 1,
    sendGridAPIKey: configEntity.sendGridAPIKey,
    sendGridAPISender: configEntity.sendGridAPISender,
    sendGridForgotPasswordTemplate: configEntity.sendGridForgotPasswordTemplate,
    googleRecaptchaClientKey: configEntity.googleRecaptchaClientKey,
  };
}
