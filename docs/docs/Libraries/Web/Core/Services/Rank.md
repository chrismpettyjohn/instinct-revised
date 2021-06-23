## Description
The Rank Service is responsible for any logic pertaining to ranks

## Usage
```typescript
import { rankService } from '@instinct-web/core';
```
## Methods

### create
Creates a new rank for users with the `Manage Ranks` scope
```typescript
const newRank = await rankService.create({
  name: '',
  badge: '',
  level: 1,
  users: [],
  ...{},
});
```

### getAll
Returns an array of ranks to the public
```typescript
const ranks = await rankService.getAll();
```

### getStaff
Returns an array of public staff ranks to the public
```typescript
const staffRanks = await rankService.getStaff();
```

### getByID
Returns a rank by ID to the public
```typescript
const rank = await rankService.getByID(1);
```

### updateByID
Updates a rank by ID for users with the `Manage Ranks` scope
```typescript
await rankService.updateByID(1, {
  name: 'changed name',
});
```

### deleteByID
Deletes a rank by ID for users with the `Manage Ranks` scope
```typescript
await rankService.deleteByID(1);
```
