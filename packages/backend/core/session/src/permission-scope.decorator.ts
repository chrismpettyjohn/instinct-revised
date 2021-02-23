import {Permissions} from '@instinct-prj/interface';
import {HasSession} from './has-session.decorator';
import {PermissionScopeGuard} from './permission-scope.guard';
import {applyDecorators, SetMetadata, UseGuards} from '@nestjs/common';

export function HasScope(scope: keyof Permissions) {
  return applyDecorators(
    HasSession(),
    SetMetadata('scope', scope),
    UseGuards(PermissionScopeGuard)
  );
}
