## Overview
The Common Module provide reusable services for common backend code

### Services

#### Environment
Returns an environment token's value by key or fails

```typescript
import { getEnvOrFail } from '@instinct-api/common';
const test = getEnvOrFail('TEST');
```

#### Hash Service

##### Generate
Returns the hashed text following the configured hashing method from the environment `PASSWORD_HASH`
```typescript
import { HashService } from '@instinct-api/common';
const hashService = new HashService();
hashService.generate('test');
```

##### Compare
Compares the raw text against the hashed following the configured hashing method from the environment `PASSWORD_HASH`
```typescript
import { HashService } from '@instinct-api/common';
const hashService = new HashService();
const hashed = hashService.generate('test');
hashService.compare('test', hashed);
```
