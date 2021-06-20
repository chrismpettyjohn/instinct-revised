## Overview
News Articles are used to keep your users updated about the latest events, changes and other important
information.  

### Fetch Articles
Returns an array of news articles to the public
```
GET /api/articles
```

### Fetch Article by ID
Returns a news article by its ID to the public
```
GET /api/articles/:articleID
```

### Create Article
Creates a new news article for users with the `Manage News` scope
```
POST /api/articles
{
  title: string;
  description: string;
  content: string;
  headerImage: string;
  thumbnailImage: string;
  categoryID: number;
}
```

### Update Article by ID
Updates a news article for users with the `Manage News` scope
```
PATCH /api/articles/:articleID
{
  title: string;
  description: string;
  content: string;
  headerImage: string;
  thumbnailImage: string;
  categoryID: number;
}
```

### Delete Article by ID
Deletes a news article for users with the `Manage News` scope
```
Delete /api/articles/:articleID
```
