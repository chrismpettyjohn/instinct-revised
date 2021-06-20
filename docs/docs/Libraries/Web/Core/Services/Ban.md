## Description
The Ban Service is responsible for any logic pertaining to CRUD operations with bans via the REST API.

## Usage
```
import { banService } from '@instinct-web/core';
```
## Methods

### create
Creates a new ban for users with the `Manage Bans` scope
```typescript
const newBan = await banService.create({
  userID: 1,
  reason: 'You are a bad user',
  banStart: +new Date() / 1000,
  banEnd: +new Date() / 1000,
});
```

### getAll
Returns an array of news articles for users with the `Manage Bans` scope
```typescript
const bans = await banService.getAll();
```

### getByID
Returns a ban by ID for users with the `Manage Bans` scope
```typescript
const ban = await banService.getByID(1);
```

### updateByID
Updates a ban by ID for users with the `Manage Bans` scope
```typescript
const updatedBan = await banService.updateByID(1, {
  reason: 'testing changes',
});
```

### deleteByID
Deletes a ban by ID for users with the `Manage Bans` scope
```typescript
await banService.deleteByID(1);
```
