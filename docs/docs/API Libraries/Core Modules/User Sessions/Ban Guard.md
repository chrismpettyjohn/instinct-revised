## Description
The Ban Guard ensures users are not correctly IP banned or account banned when used

## Additional Info
The `HasSession` decorator automatically applies the ban guard.

## Usage
```
import { AuthGuard } from '@nestjs/passport';
import { AccountBannedGuard } from '@instinct-api/session';

@Controller('test')
@UseGuards(AuthGuard('bearer-token'),  AccountBannedGuard,
export class TestController { }
```
