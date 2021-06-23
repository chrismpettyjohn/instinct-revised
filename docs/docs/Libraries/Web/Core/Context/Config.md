## Description
The Config Context is responsible storing Instinct's config settings

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
