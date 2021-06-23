## Description
The Health Context is responsible for storing useful stats such as online users and rooms

**Please note:**
<br />
The health context is automatically managed by the `Data Polling` component

## Usage
```typescript
import { useContext } from 'react';
import { healthContext } from '@instinct-web/core';
```

### health
The currently stored health of the game denoting Instinct version, players online and rooms loaded.

```typescript
const { health } = useContext(healthContext);
```

### setHealth
Updates the currently stored health
```typescript
const {setHealth} = useContext(healthContext);
setHealth({});
```
