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

export const defaultConfig: Config = {
  siteName: 'Habbo',
  siteBeta: false,
  emulatorIP: '127.0.0.1',
  emulatorPort: '3002',
  siteLink: 'http://localhost:3000',
  nitroURL: 'https://nitro.imchris.dev',
  loadingMessage: 'Please wait as I do some things',
  rankBadgeURL: '',
  groupBadgeURL: 'http://localhost:3000/swfs/other/images/Badgeparts/generated',
  googleRecaptchaClientKey: '',
  websocketEnabled: false,
  websocketIP: '',
  websocketPort: '',
  discordURL: '',
  maintenanceEnabled: false,
};
