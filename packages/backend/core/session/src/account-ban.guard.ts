import {Observable} from 'rxjs';
import {RequestWithSession} from './session.type';
import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
} from '@nestjs/common';

@Injectable()
export class AccountBannedGuard implements CanActivate {
  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request: RequestWithSession = context.switchToHttp().getRequest();

    const timestamp = +new Date() / 1000;
    const activeBans = request.user.bans!.filter(
      ban => ban.banExpirationTimestamp > timestamp
    );

    if (activeBans.length > 0) {
      throw new ForbiddenException('You are banned');
    }

    return activeBans.length === 0;
  }
}
