## Overview
The Config Module provides reusable RESTful APIs, services, pipes and more to work with config

### REST API

#### Fetch Public Config
Returns the public `Config` object
```
GET /api/config
```

#### Fetch Full Config
Returns the full `Config` object for users with the `Manage Config` scope
```
GET /api/config/full
```

#### Update Config
Update the config for users with the `Manage Config` scope and clears the cache
```
POST /api/config
{
  siteName: string;
  siteLink: string;
  siteBeta: boolean;
  emulatorIP: string;
  emulatorPort: string;
  swfHabbo: string;
  swfExternalVariables: string;
  swfExternalTexts: string;
  swfProductData: string;
  swfFurniData: string;
  swfFigureData: string;
  swfBaseURL: string;
  swfBadgeURL: string;
  rankBadgeURL: string;
  loadingMessage: string;
  groupBadgeURL: string;
  sendGridAPIKey: string;
  sendGridAPISender: string;
  sendGridForgotPasswordTemplate: string;
  googleRecaptchaClientKey: string;
  websocketEnabled: boolean;
  websocketIP: string;
  websocketPort: string;
  nitroURL: string;
  discordURL: string;
  twitterURL: string;
  maintenanceEnabled: boolean;
  findRetrosUsername?: string;
  stripePublicKey: string;
  stripeSecretKey: string;
  logoURL: string;
}
```
