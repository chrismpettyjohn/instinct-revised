## Description
The Session Context is responsible storing session state

## Usage
```typescript
import { useContext } from 'react';
import { sessionContext } from '@instinct-web/core';
```

### sso
The authenticated user's in-game SSO
```typescript
const {sso} = useContext(sessionContext);
```

### setSSO
Updates the currently stored SSO

```typescript
const { setStore } = useContext(sessionContext);
setProgress({
  applicationMode: true,
});
```

### user
The current authenticated user if applicable
```typescript
const {user} = useContext(sessionContext);
```

### setUser
Updates the currently stored user
```typescript
const {setUser} = useContext(sessionContext);
setUser({...{}});
```

### online
Boolean denoting if authenticated user is online
```typescript
const {online} = useContext(sessionContext);
```

### setOnline
Updates the currently stored online state
```typescript
const {setOnline} = useContext(sessionContext);
setOnline(true);
```

### banned
Boolean denoting if the user is banned
```typescript
const {banned} = useContext(sessionContext);
```


### setBanned
Updates the currently stored banned state
```typescript
const {setBanned} = useContext(sessionContext);
setBanned(false);
```
