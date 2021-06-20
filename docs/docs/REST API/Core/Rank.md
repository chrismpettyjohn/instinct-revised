## Overview
The Rank Module provides reusable RESTful APIs to work with ranks

### REST API

#### Fetch Ranks
Returns an array of rank to the public
```
GET /api/ranks
```

#### Fetch Rank by ID
Returns a rank by its ID to the public
```
GET /api/ranks/:rankID
```

#### Create Rank
Creates a new rank for users with the `Manage Ranks` scope
```
POST /api/ranks
{
  name: string;
  badge: string;
  level: number;
  users: number[];
  websiteShowStaff: boolean;
  websiteShowAdminPanel: boolean;
  websiteManageNews: boolean;
  websiteManageRanks: boolean;
  websiteManageUsers: boolean;
  websiteManageBans: boolean;
  websiteManageConfig: boolean;
  websiteManageBetaCodes: boolean;
  websiteManageGuestbook: boolean;
  websiteManageEmulator: boolean;
  websiteManageComments: boolean;
  websiteManageForums: boolean;
}
```

#### Update Rank by ID
Updates a rank for users with the `Manage Ranks` scope
```
PATCH /api/ranks/:rankID
{
  name: string;
  badge: string;
  level: number;
  users: number[];
  websiteShowStaff: boolean;
  websiteShowAdminPanel: boolean;
  websiteManageNews: boolean;
  websiteManageRanks: boolean;
  websiteManageUsers: boolean;
  websiteManageBans: boolean;
  websiteManageConfig: boolean;
  websiteManageBetaCodes: boolean;
  websiteManageGuestbook: boolean;
  websiteManageEmulator: boolean;
  websiteManageComments: boolean;
  websiteManageForums: boolean;
}
```

#### Delete Rank by ID
Deletes a rank for users with the `Manage Ranks` scope
```
Delete /api/ranks/:rankID
```
