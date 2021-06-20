## Overview
The User module provides several REST endpoints for working with users on the front-end.

### REST API

#### Register Account
Creates a new user provided the user isn't surpassing the max accounts per IP and passed the recaptcha
```
POST /api/users
```

#### Fetch Online Users
Returns an array of online users to the public
```
GET /api/users/online
```

#### Fetch Users of the Week
Returns an array of users picked to be user of the week to the public
```
GET /api/users/user-of-the-week
```

#### Fetch User by ID
Returns a user by ID to the public
```
GET /api/users/:userID
```

#### Fetch User by ID - Rooms
Returns an array of rooms belonging to a user by ID to the public
```
GET /api/users/:userID/rooms
```

#### Fetch User Profile by Username
Returns a user profile by Username to the public
```
GET /api/users/profile/:username
```
