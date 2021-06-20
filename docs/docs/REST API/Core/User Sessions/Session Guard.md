## Description
The Session guard ensures users are correctly authenticated and are in good standing.

## More Information
The Session Guard combines the following guards into a single unit
* Auth Guard - Verifies requests have a JWT that belongs to a user
* Ban Guard - Verifies users are not IP or account banned
* Beta Mode Guard - Verifies users have a beta code if the website has beta mode enabled

## Usage
```
import { AuthGuard } from '@nestjs/passport';
import { HasSession, GetSession } from '@instinct-api/session';

@Controller('test')
@HasSession()
export class TestController {
    @Get()
    getUser(@GetSession() user: UserEntity) {
    }
}
```
