## Overview
The User module provides several REST endpoints for working with bans on the front-end.

### REST API

#### Create Ban
Creates a new ban for users with the `Maanage Bans` scope
```
POST /api/users/bans
{
  userID: number;
  reason: string;
  banStart: number;
  banEnd: number;
}
```

#### Fetch Bans
Returns an array of bans for users with the `Maanage Bans` scope
```
GET /api/users/bans
```

#### Fetch Ban by ID
Returns a ban by ID for users with the `Maanage Bans` scope
```
GET /api/users/bans/:banID
```

#### Delete Ban
Deletes a ban by ID for users with the `Maanage Bans` scope
```
DELETE /api/users/bans/:banID
```
