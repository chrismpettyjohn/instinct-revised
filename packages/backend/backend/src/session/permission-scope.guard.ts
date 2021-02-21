import {Observable} from 'rxjs';
import {Reflector} from '@nestjs/core';
import {RequestWithSession} from './session.type';
import {Permissions} from '@instinct-prj/interface';
import {rankWire} from '../database/rank';
import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
} from '@nestjs/common';

@Injectable()
export class PermissionScopeGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const scope: keyof Permissions = this.reflector.get(
      'scope',
      context.getHandler()
    );
    const request: RequestWithSession = context.switchToHttp().getRequest();
    const grantedScopes = rankWire(request.user.rank!).permissions;
    const hasScope = grantedScopes[scope];

    if (!hasScope) {
      throw new ForbiddenException("You don't have permission to do this");
    }

    return hasScope;
  }
}
