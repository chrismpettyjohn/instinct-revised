## Description
The Client Context is responsible storing the loading progress of the client

**Please note:**
<br />
The client context is only used with the *Flash Client* and is automatically managed

## Usage
```typescript
import { useContext } from 'react';
import { clientContext } from '@instinct-web/core';
```

### loadingProgress
The current loading progress of the flash client measured in percentages.
```typescript
const {loadingProgress} = useContext(clientContext);
```

### setProgress
Updates the currently stored loading progress value
```typescript
const {setProgress} = useContext(clientContext);
setProgress(100);
```
