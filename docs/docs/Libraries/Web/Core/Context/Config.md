## Description
The Config Context is responsible for storing Instinct's config settings

**Please note:**
<br />
The health context is automatically managed by the `Data Polling` component

## Usage
```typescript
import { useContext } from 'react';
import { configContext } from '@instinct-web/core';
```

### config
The currently stored version of Instinct's public config

```typescript
const { config } = useContext(configContext);
console.log(config.siteName);
```

### setConfig
Updates the currently stored config
```typescript
const {setConfig} = useContext(configContext);
setConfig({});
```
