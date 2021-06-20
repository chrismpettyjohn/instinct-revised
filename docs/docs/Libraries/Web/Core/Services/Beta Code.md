## Description
The Beta Code Service is responsible for any logic pertaining to CRUD operations with beta codes via the REST API.

## Usage
```typescript
import { betaCodeService } from '@instinct-web/core';
```
## Methods

### create
Creates a new beta code for users with the `Manage Beta Codes` scope

```typescript
const newBetaCode = await betaCodeService.create();
```

### getAll
Returns an array of news articles for users with the `Manage Bans` scope

```typescript
const betaCodes = await betaCodeService.getAll();
```

### delete
Deletes a ban by ID for users with the `Manage Bans` scope
```typescript
await betaCodeService.delete('TEST-CODE-1');
```
