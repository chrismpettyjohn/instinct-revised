## Description
The Photo Service is responsible for any logic pertaining to in game photos

## Usage
```typescript
import { photoService } from '@instinct-web/core';
```
## Methods

### getAll
Returns an array of in game photos to the public
```typescript
const photos = await photoService.getAll();
```

### getByID
Returns an in game photo by ID to the public
```typescript
const photo = await photoService.getByID(1);
```
