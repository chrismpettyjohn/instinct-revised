## Description
The Emulator Service is responsible for any logic pertaining to emulator settings and texts.

## Usage
```typescript
import { emulatorService } from '@instinct-web/core';
```
## Methods

### getSettings
Returns the emulator settings
```typescript
const settings = await emulatorService.getSettings();
```

### updateSettings
Updates the emulator settings
```typescript
await emulatorService.updateSettings([
  {
    id: 1,
    label: 'hotel.welcome.alert.message',
    value: 'Welcome to Habbo Hotel %user%!',
  },
]);
```

### getTexts
Returns the emulator texts
```typescript
const texts = await emulatorService.getTexts();
```

### updateTexts
Updates the emulator settings
```typescript
await emulatorService.updateSettings([
  {
    id: 1,
    label: 'commands.description.cmd_say_all',
    value: ':sayall <message>',
  },
]);
```
