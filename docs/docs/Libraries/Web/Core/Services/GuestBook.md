## Description
The Guestbook Service is responsible for any logic pertaining to profile guestbooks

## Usage
```typescript
import { guestbookService } from '@instinct-web/core';
```
## Methods

### getAllForUser
Returns an array of guestbook posts on a user profile to the public
```typescript
const posts = await guestbookService.getAllForUser(1);
```

### create
Creates a new guestbook post on a user profile for authenticated users
```typescript
const newPost = await guestbookService.create(1, { content: 'hello world' });
```

### update
Updates a guestbook post on a user profile for the post author or users with the `Manage Guestbook` scope
```typescript
await guestbookService.update(1, 1, { content: 'changes' });
```

### delete
Delete a guestbook post on a user profile for the post author or users with the `Manage Guestbook` scope
```typescript
await guestbookService.delete(1, 1);
```
