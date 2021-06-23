## Description
The User Service is responsible for any logic pertaining to users

## Usage
```typescript
import { userService } from '@instinct-web/core';
```
## Methods

### create
Attempts to register a new user given the  constraints are met (within max accounts, recaptcha, etc) for the public
```typescript
const newUser = await userService.create('username', 'password', 'user@email.com', 'recaptcha', 'beta-code');
```

### getByUsername
Returns a user profile by username to the public
```typescript
const user = await userService.getByUsername('user');
```

### getByID
Returns a user by ID to the public
```typescript
const user = await userService.getByID(1);
```

### getMostCredits
Returns an array of the top 10 users with the most credits to the public
```typescript
const topUsers = await userService.getMostCredits();
```
### getMostPixels
Returns an array of the top 10 users with the most pixels to the public
```typescript
const topUsers = await userService.getMostPixels();
```

### getMostPoints
Returns an array of the top 10 users with the most points to the public
```typescript
const topUsers = await userService.getMostPoints();
```

### getOnline
Returns an array of online users to the public
```typescript
const onlineUsers = await userService.getOnline();
```

### getUserOfTheWeek
Returns an array of users of the week to the public
```typescript
const userOfTheWeek = await userService.getUserOfTheWeek();
```
