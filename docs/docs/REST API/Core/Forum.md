## Overview
The Forum Module provides reusable RESTful API to work with forums

### Forum Section

#### Fetch Sections
Returns an array of forum sections
```
GET /forum/sections
```

#### Fetch Section by ID
Returns the forum section by ID
```
GET /forum/sections/:sectionID
```

#### Create Section
Creates a new forum section for users with the `Manage Forums` scope
```
POST /forum/sections
{
    title: string;
    description: string;
    icon: string;
}
```

#### Updates Section
Updates a forum section by ID for users with the `Manage Forums` scope
```
POST /forum/sections/:sectionID
{
    title?: string;
    description?: string;
    icon?: string;
}
```

#### Delete Section
Deletes a forum section by ID for for users with the `Manage Forums` scope
```
DELETE /forum/sections/:sectionID
```
<hr />

### Forum Post

#### Fetch Posts
Returns the forum post for a forum section
```
GET /forum/sections/:sectionID/posts
```

#### Fetch Post by ID
Returns the forum post by ID for users with the `Manage Emulator` scope
```
GET /forum/sections/:sectionID/posts/:postID
```

#### Create Post
Creates a new forum post inside a forum section
```
POST /forum/sections/:sectionID/posts
{
    title: string;
    content: string;
}
```

#### Update Post
Updates a forum post by ID for the post author or for users with the `Manage Forums` scope
```
PATCH /forum/sections/:sectionID/posts/:postID
{
    title?: string;
    content?: string;
}
```

#### Delete Post
Deletes a forum post by ID for the post author or for users with the `Manage Forums` scope
```
DELETE /forum/sections/:sectionID/posts/:postID
```
