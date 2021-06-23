## Description
The Session Service is responsible for any logic pertaining to user sessions.  

**Please note:** 
<br />
Services are not associated with the context implementation.  Please refer to the context implementation
for further details in implementing custom login flow or any auth interaction.

## Usage
```typescript
import { sessionService } from '@instinct-web/core';
```
## Methods

### init
Fetches the bearer token from local-storage if it exists and attempts to login with it.  Upon failure, it destroys the
token and returns undefined.
```typescript
await sessionService.init();
```

### attemptCredentials
Generates a new JWT bearer token upon success otherwise throws exception
```typescript
const jwt = await sessionService.attemptCredentials('username', 'password');
```

### attemptBearerToken
Returns user info upon valid JWT bearer token otherwise throws exception
```typescript
const user = await sessionService.attemptBearerToken('BEARER 123');
```

### createSSO
Generates a new SSO for logging into the game for authenticated users
```typescript
const sso = await sessionService.createSSO();
```

### getCurrentUser
Returns the current authenticated user
```typescript
const user = await sessionService.getCurrentUser();
```

### logout
Removes the user's bearer token from localStorage
```typescript
await sessionService.logout();
```

### updateClientType
Updates the authenticated user's preferred client preferences
```typescript
await sessionService.updateClientType('nitro');
```

### updateProfile
Updates the authenticated user's profile
```typescript
await sessionService.updateProfile('GZ2n6NGOyvA&t=181s');
```

### updateEmail
Updates the authenticated user's email
```typescript
await sessionService.updateEmail('current-password', 'new@email.com');
```
### updatePassword
Updates the authenticated user's password
```typescript
await sessionService.updateEmail('current-password', 'new--password', 'new-password-again');
```

### generateForgotPasswordToken
Sends an email to the user with a forgot password token
```typescript
await sessionService.generateForgotPasswordToken('user@email.com');
```

### redeemForgotPasswordToken
Redeems a forgot password token and updates the user password if valid
```typescript
await sessionService.redeemForgotPasswordToken('token', 'new-password', 'new-password-again');
```

### didVoteOnFindRetros
Returns a boolean indicating if the authenticated user voted on FindRetros
```typescript
await sessionService.redeemForgotPasswordToken('token', 'new-password', 'new-password-again');
```
