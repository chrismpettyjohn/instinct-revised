## Description
The ManageUsers Service is responsible for any logic pertaining to managing users

**Please note:**
<br />
This service is intended for administrative interfaces and exposes sensitive user information such as email and IP.
All requests on this service require the `Manage Users` scope and are not intended for the public.

## Usage
```typescript
import { manageUsersService } from '@instinct-web/core';
```
## Methods

### getAll
Returns an array of users with personal information for users with the `Manage Users` scope

```typescript
const users = await manageUsersService.getAll();
```

### create
Creates a new user without registration limitations such as recaptcha or max accounts for users with the `Manage Users` scope
```typescript
const newUser = await manageUsersService.create({});
```

### update
Updates a user by ID for users with the `Manage Users` scope

```typescript
await manageUsersService.update(1, { motto : 'test' });
```

### delete
Deletes a user by ID for users with the `Manage Users` scope
```typescript
await manageUsersService.delete(1);
```
