## Description
The Article Service is responsible for any logic pertaining to CRUD operations with news articles via the REST API.

## Usage
```
import { articleService } from '@instinct-web/core';
```

## News Articles

### getAll
Returns an array of news articles
```typescript
const articles = await articleService.getAll();
```

### getByID
Returns a news article by ID if it exists
```typescript
const article = await articleService.getByID(1);
```

### create
Creates a news article in the database if the user has the `Manage News` scope
```typescript
const newArticle = await articleService.create({
  title: '',
  description: '',
  content: '',
  headerImage: '',
  thumbnailImage: '',
  categoryID: 1,
});
```

### updateByID
Updates the news article in the database by ID if the user has the `Manage News` scope
```typescript
const updatedArticle = await articleService.updateByID(1, {
  title: 'updated title',
});
```

### deleteByID
Delete the news article in the database by ID if the user has the `Manage News` scope
```typescript
 await articleService.deleteByID(1);
```

### createComment
Creates a new comment on the news article
```typescript
const updatedArticle = await articleService.createComment(1, {
  content: 'hello world',
});
```

### deleteComment
deletes a new comment on the news article by ID if the user is the original author OR has the `Manage News` scope
```typescript
 await articleService.deleteComment(1, 2);
```

## News Categories

### getAllCategories
Returns an array of news categories
```typescript
const categories = await articleService.getAllCategories();
```

### createCategory
Creates a news article in the database if the user has the `Manage News` scope
```typescript
const newCategory = await articleService.createCategory('test category', 'red');
```

### deleteCategoryByID
Delete the news article in the database by ID if the user has the `Manage News` scope
```typescript
await articleService.deleteCategory(1);
```
