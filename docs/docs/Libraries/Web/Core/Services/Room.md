## Description
The Room Service is responsible for any logic pertaining to rooms

## Usage
```typescript
import { roomService } from '@instinct-web/core';
```
## Methods

### getAll
Returns an array of rooms to the public
```typescript
const rooms = await roomService.getAll();
```

### getMostPopular
Returns the top 10 most popular rooms to the public
```typescript
const popularRooms = await roomService.getMostPopular();
```

### getByID
Returns a room by ID to the public
```typescript
const room = await roomService.getByID(1);
```
 
