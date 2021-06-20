## Description
The Config Service is responsible for any logic pertaining to website config and health via the REST API.

## Usage
```typescript
import { configService } from '@instinct-web/core';
```
## Methods

### getConfig
Returns the config for Instinct.  Please note: The config is cached up to 15 minutes by default.
```typescript
const config = await configService.getConfig();
```
### getFullConfig
Returns the full config for Instinct including any hidden fields for users with the `Manage Config` scope.
```typescript
const fullConfig = await configService.getFullConfig();
```

### updateConfig
Updates the config for Instinct and clears the config cache for users with the `Manage Config` scope.
```typescript
await configService.updateConfig({
  siteName: 'Testing Site',
});
```

### getHealth
Returns the game health for Instinct including metrics about users and rooms.
```typescript
const gameHealth = await configService.getHealth();
```
