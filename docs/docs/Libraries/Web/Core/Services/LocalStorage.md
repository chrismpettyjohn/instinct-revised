## Description
The LocalStorage Service is responsible for any logic pertaining to local storage on the client / browser

## Usage
```typescript
import { localStorageService } from '@instinct-web/core';
```
## Methods

### get
Returns a value from localStorage
```typescript
const token = localStorageServce.get('auth-token');
```

### set
Sets a value in localStorage

```typescript
localStorageServce.set('auth-token', 'BEARER-1');
```

### delete
Deletes a value from localStorage
```typescript
localStorageServce.delete('auth-token');
```
