## Overview
The Room Module provides reusable RESTful APIs, services, pipes and more to work with rooms

### REST API

#### Fetch Rooms
Returns an array of rooms to the public
```
GET /api/rooms
```

#### Fetch Most Popular Rooms
Returns an array of rooms to the public ordered by current visitors
```
GET /api/rooms/most_popular
```

#### Fetch Room by ID
Returns a room by its ID to the public
```
GET /api/rooms/:roomID
```
