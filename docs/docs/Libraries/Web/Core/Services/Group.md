## Description
The Group Service is responsible for any logic pertaining to user groups.

## Usage
```typescript
import { groupService } from '@instinct-web/core';
```
## Methods

### getAll
Returns an array of all groups to the public
```typescript
const groups = await groupService.getAll();
```

### getMostPopular
Returns an array of the top 10 most popular groups to the public
```typescript
const groups = await groupService.getMostPopular();
```

### getByID
Returns a group by ID to the public
```typescript
const group = await groupService.getByID(2)
```
