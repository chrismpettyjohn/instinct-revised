## Overview
The Beta Code Module provides reusable RESTful APIs, services, pipes and more to work with beta codes

### REST API

#### Fetch Beta Codes
Returns an array of beta codes to users with the`Manage Beta Codes` scope
```
GET /api/beta-codes
```

#### Create Beta Code
Create a new beta code for users with the`Manage Beta Codes` scope
```
POST /api/beta-codes
```

#### Delete Beta Code by ID
Deletes a beta code by ID for users with the`Manage Beta Codes` scope
```
DELETE /api/beta-codes/:betaCodeID
```
