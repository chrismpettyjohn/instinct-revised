## Overview
The Session module provides several REST endpoints for usage on the front-end.

### REST API

#### Login Using Password
Returns a signed JWT when given a valid username and password combination
```
POST /api/session
{
    username: string;
    password: string;
}
```

#### Fetch User Info
Returns the profile of the currently authenticated user
```
GET /api/session
```

#### Create SSO
Generates and returns a SSO for entering the game for the currently authenticated user
```
POST /api/session/sso
```

#### Update Settings - Preferences
Updates account preferences for the currently authenticated user
```
POST /api/session/preferences
{
  favoriteYoutubeVide?: string;
  clientType?: 'nitro' | 'flash' | 'desktop';
}
```

#### Update Settings - Email
Updates account email for the currently authenticated user
```
POST /api/session/email
{
  email: string;
  password: string;
}
```

#### Update Settings - Password
Updates account security for the currently authenticated user
```
POST /api/session/email
{
  oldPassword: string;
  newPassword: string;
  newPasswordAgain: string;
}
```
