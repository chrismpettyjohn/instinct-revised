## Description
The Beta Code Guard ensures users have a valid beta code connected to their account

## Additional Info
The `HasSession` decorator automatically applies the Beta Mode guard.

## Usage
```
import { AuthGuard } from '@nestjs/passport';
import { BetaModeGuard } from '@instinct-api/session';

@Controller('test')
@UseGuards(AuthGuard('bearer-token'),  BetaModeGuard,
export class TestController { }
```
