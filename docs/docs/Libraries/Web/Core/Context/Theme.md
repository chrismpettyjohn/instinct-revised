## Description
The Theme Context is responsible storing theme settings

## Usage
```typescript
import { useContext } from 'react';
import { themeContext } from '@instinct-web/core';
```

### showClient
Boolean denoting if the client should be visible or not
```typescript
const {showClient} = useContext(themeContext);
```

### showFooter
Boolean denoting if the footer should be visible or not
```typescript
const {showFooter} = useContext(themeContext);
```

### showModalOverlay
Boolean denoting if the modal overlay should be visible or not
```typescript
const {showModalOverlay} = useContext(themeContext);
```

### applicationMode
Boolean denoting if the user is in `application mode` for the flash client
```typescript
const {applicationMode} = useContext(themeContext);
```

### setStore
Updates the currently stored theme state
```typescript
const {setStore} = useContext(themeContext);
setProgress({
  applicationMode: true,
});
```
