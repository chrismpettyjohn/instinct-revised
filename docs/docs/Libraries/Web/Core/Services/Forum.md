## Description
The Forum Service is responsible for any logic pertaining to website forums.  

**Please note** This functionality is independent of group forums and specified to Instinct

## Usage
```typescript
import { forumService } from '@instinct-web/core';
```
## Methods

### createSection
Creates a new forum section for users with the `Manage Forums` scope
```typescript
const newSection = await emulatorService.createSection({
  title: '',
  description: '',
  icon: '',
})
```

### getSections
Returns an array of forum sections by parent section ID to the public
```typescript
const sections = await emulatorService.getSections(-1)
```

### getSectionByID
Returns a forum section and its children by ID to the public
```typescript
const section = await emulatorService.getSectionByID(2)
```

### updateSection
Updates a forum section for users with the `Manage Forums` scope
```typescript
await emulatorService.updateSection(2, {
  title: 'test',
});
```

### deleteSection
Deletes a forum section for users with the `Manage Forums` scope
```typescript
await emulatorService.deleteSection(2);
```

### createPost
Creates a new post in a forum section for authenticated users 
```typescript
const newPost = await emulatorService.createPost(2, {
  title: '',
  content: '',
});
```

### getPosts
Returns an array of posts that belong to a forum section to the public
```typescript
const posts = await emulatorService.getPosts(2)
```

### getPostByID
Returns a post by ID to the public
```typescript
const post = await emulatorService.getPostByID(2, 1);
```

### updatePost
Updates a post by ID for the original post author or users with thw `Manage Forums` scope
```typescript
await emulatorService.updatePost(2, 1, {
  title: 'test',
});
```

### deletePost
Deletes a post by ID for the original post author or users with thw `Manage Forums` scope
```typescript
await emulatorService.deletePost(2, 1);
```
