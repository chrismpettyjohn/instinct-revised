## Overview
The Database Module provides reusable TypeORM entities and repositories to perform database operations

### Base Repository
All repositories in the database module follow the common base repo which provides reusable database logic and emits events

### Example Usage
```
import { UserRepository } from '@instinct-api/database';

const userRepo = new UserRepository();
userRepo.find({ username: 'dog' });
```
