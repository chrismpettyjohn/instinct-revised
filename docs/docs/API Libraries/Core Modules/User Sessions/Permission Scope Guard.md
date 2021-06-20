## Description
The Permission Scope Guard ensures users have the proper authorization scope

## Usage
```
import { AuthGuard } from '@nestjs/passport';
import { HasScope } from '@instinct-api/session';

@Controller('test')
@HasScope('websiteManageUsers')
export class TestController { }
```
